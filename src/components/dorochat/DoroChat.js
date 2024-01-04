import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Navbar from "../Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, selectAuthToken } from "../../store/slices/authSlice";
import "../../styles/DoroChat.css";

function DoroChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey Rastin! How have you been since our last session?",
      sender: "ai",
    },
    // Add more messages here as needed
  ]);
  const dispatch = useDispatch();
  const [showTerms, setShowTerms] = useState(true); // State to control the visibility of the terms popup
  const [websocket, setWebsocket] = useState(null);
  const [incomingMessage, setIncomingMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);

  const token = useSelector(selectAuthToken);

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  useEffect(() => {
    // Check if the token is available
    console.log(token);
    if (token) {
      const ws = new WebSocket(
        `wss://doro-backend-qqemuil3zq-uc.a.run.app/chat/ws?token=${token}`
      );

      ws.onopen = () => {
        console.log("WebSocket Connected");
      };

      ws.onmessage = (event) => {
        console.log("Message from server: ", event.data);

        clearTimeout(messageTimeout); // Clear the existing timeout

        const updatedMessage = incomingMessage + event.data;
        setIncomingMessage(updatedMessage);

        // Set a timeout to wait for more parts of the message
        const timeout = setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { id: Date.now(), text: updatedMessage, sender: "ai" },
          ]);
          setIncomingMessage(""); // Reset for next message
        }, 1000); // Adjust the delay as needed

        setMessageTimeout(timeout);
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error: ", error);
      };

      ws.onclose = (event) => {
        console.log("WebSocket Disconnected: ", event.reason, event.code);
      };

      setWebsocket(ws);

      // Clean up function
      return () => {
        if (ws) {
          ws.close();
        }
      };
    }
  }, [token, incomingMessage, messageTimeout]);

  const handleSendMessage = (newMessage) => {
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(newMessage);
      console.log("Message sent:", newMessage);
    } else {
      console.log("WebSocket not connected");
    }

    setMessages((prevMessages) => {
      let updatedMessages = [
        ...prevMessages,
        { id: Date.now(), text: newMessage, sender: "user" },
      ];
      if (updatedMessages.length > 4) {
        updatedMessages.shift();
        updatedMessages.shift();
      }
      return updatedMessages;
    });
  };

  const handleAgree = () => {
    setShowTerms(false); // Hide the terms popup and remove blur
  };

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
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.sender}`}>
                {message.text}
              </div>
            ))}
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
            <Button style={{ padding: "10px 25px", marginRight: "1%" }}>
              Send
            </Button>
            <Button style={{ padding: "10px 25px" }}>End</Button>
          </div>}
        </div>
      </div>
    </>
  );
}

export default DoroChat;
