import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, selectAuthToken } from "../../store/slices/authSlice";
import "../../styles/DoroChat.css";

function DoroChat() {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const [showTerms, setShowTerms] = useState(true);
  const websocket = useRef(null);
  const lastMessageRef = useRef(null);
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  useEffect(() => {
    if (
      token &&
      (!websocket.current || websocket.current.readyState === WebSocket.CLOSED)
    ) {
      websocket.current = new WebSocket(
        `wss://doro-backend-qqemuil3zq-uc.a.run.app/chat/ws?token=${token}`
      );

      websocket.current.onopen = () => {
        console.log("WebSocket Connected");
        // Send an empty message to initiate the conversation
        handleSendMessage("");
      };

      websocket.current.onerror = (error) => {
        console.error("WebSocket Error: ", error);
      };

      websocket.current.onclose = (event) => {
        console.log("WebSocket Disconnected: ", event.reason, event.code);
      };
    }

    return () => {
      if (websocket.current) {
        websocket.current.close();
      }
    };
  }, [token]);

  useEffect(() => {
    // Function to close WebSocket connection
    const closeWebSocket = () => {
      if (
        websocket.current &&
        websocket.current.readyState === WebSocket.OPEN
      ) {
        websocket.current.close();
      }
    };

    // Add 'beforeunload' event listener to handle page close/navigate away
    window.addEventListener("beforeunload", closeWebSocket);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener("beforeunload", closeWebSocket);

      // Close the WebSocket connection when the component unmounts
      closeWebSocket();
    };
  }, []);

  useEffect(() => {
    if (websocket.current) {
      websocket.current.onmessage = (event) => {
        setMessages((messages) => {
          const newMessages =
            messages.length >= 4 ? messages.slice(1) : [...messages];
          if (
            newMessages.length === 0 ||
            newMessages[newMessages.length - 1].sender !== "ai"
          ) {
            return [
              ...newMessages,
              { id: Date.now(), text: event.data, sender: "ai" },
            ];
          } else {
            return newMessages.map((message, index) => {
              if (index === newMessages.length - 1) {
                return { ...message, text: message.text + event.data };
              }
              return message;
            });
          }
        });
      };
    }
  });

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

const handleSendMessage = (newMessage) => {
  if (websocket.current && websocket.current.readyState === WebSocket.OPEN) {
    websocket.current.send(newMessage);
    if (newMessage !== "") {
      setMessages((messages) => {
        let newMessages =
          messages.length >= 4 ? messages.slice(1) : [...messages];
        return [
          ...newMessages,
          { id: Date.now(), text: newMessage, sender: "user" },
        ];
      });
    }
  } else {
    console.log("WebSocket not connected");
  }
};


  const handleAgree = () => {
    setShowTerms(false); // Hide the terms popup and remove blur
  };

  // Sort messages by ID (timestamp) before rendering
  const sortedMessages = messages.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="fade-in">
        {showTerms && (
          <div className="terms-popup">
            <div className="terms-content">
              <div className="scroll-wrapper">
                <h2 style={{ fontSize: "28px" }}>Disclaimer</h2>
                <p style={{ fontSize: "19px", paddingRight: "20px" }}>
                  Doro is designed to provide supportive dialogues and access to
                  validated mental health questionnaires, fostering a proactive
                  approach towards mental health awareness. However, it is not a
                  substitute for professional medical advice, diagnosis, or
                  treatment. The information and resources provided by Doro
                  should not be used as a basis for making diagnostic or
                  treatment decisions.
                </p>
                <p style={{ fontSize: "19px" }}>
                  If you or someone you know are in crisis or think you may have
                  an emergency, please use the emergency call button on this
                  page. It's imperative to consult with a qualified healthcare
                  provider or mental health professional for personalized advice
                  and treatment.
                </p>
                <p style={{ fontSize: "19px" }}>
                  Please note, the current version of Doro is intended for
                  individuals 18 years of age or older.
                </p>
                <p style={{ fontSize: "19px" }}>
                  At its core, Doro's sole aspiration is to pave the way for
                  early intervention in psychological well-being, nurturing a
                  journey towards self-awareness and proactive mental health
                  care.
                </p>
                <button onClick={handleAgree}>I AGREE</button>
              </div>
            </div>
          </div>
        )}
        <div className={`chat-wrapper ${showTerms ? "blur" : ""}`}>
          <Navbar />
          <div className="animation-wrapper"></div>
          <div className="chat-section">
            {sortedMessages.map((message, index) => {

              const totalMessages = sortedMessages.length;
              let opacity = 1;
              if (index === totalMessages - 2) {
                opacity = 0.7;
              } else if (index === totalMessages - 3) {
                opacity = 0.4;
              } else if (index === totalMessages - 4) {
                opacity = 0.1;
              }

              return (
                <div
                  key={message.id}
                  className={`chat-bubble ${message.sender}`}
                  style={{ opacity: opacity }}
                  ref={
                    index === sortedMessages.length - 1 ? lastMessageRef : null
                  }
                >
                  {message.text}
                </div>
              );
            })}
          </div>
          {!showTerms && <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <Button
              color="inherit"
              className="buttonStyle"
              variant="outlined"
              sx={{
                marginBottom: "4%",
                padding: "10px 20px",
                borderRadius: "20px",
                color: "#484F59",
                borderColor: "#D4DCE9",
                backgroundColor: "#D4DCE9",
                "&:hover, &:active": {
                  backgroundColor: "transparent !important",
                  color: "#CBD0DB !important",
                },
              }}
              component={Link}
              to="/profile"
            >
              End
            </Button>
            <Button style={{ padding: "10px 20px" }}>End</Button>
          </div>}
        </div>
      </div>
    </>
  );
}

export default DoroChat;
