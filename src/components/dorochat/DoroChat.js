import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import Navbar from '../Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchToken, selectAuthToken } from '../../store/slices/authSlice';
import '../../styles/DoroChat.css';

function DoroChat() {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const [showTerms, setShowTerms] = useState(true);
  const websocket = useRef(null);
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  useEffect(() => {
    if (token && (!websocket.current || websocket.current.readyState === WebSocket.CLOSED)) {
      websocket.current = new WebSocket(
        `wss://doro-backend-qqemuil3zq-uc.a.run.app/chat/ws?token=${token}`
      );

      websocket.current.onopen = () => {
        console.log('WebSocket Connected');
        // Send an empty message to initiate the conversation
        handleSendMessage('');
      };

      websocket.current.onerror = (error) => {
        console.error('WebSocket Error: ', error);
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
      if (websocket.current && websocket.current.readyState === WebSocket.OPEN) {
        websocket.current.close();
      }
    };

    // Add 'beforeunload' event listener to handle page close/navigate away
    window.addEventListener('beforeunload', closeWebSocket);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('beforeunload', closeWebSocket);

      // Close the WebSocket connection when the component unmounts
      closeWebSocket();
    };
  }, []);

  useEffect(() => {
    if (websocket.current) {
      websocket.current.onmessage = (event) => {
        setMessages(messages => {
          if (messages.length === 0 || messages[messages.length - 1].sender !== 'ai') {
            return [...messages, { id: Date.now(), text: event.data, sender: 'ai' }];
          } else {
            return messages.map((message, index) => {
              if (index === messages.length - 1) {
                return { ...message, text: message.text + event.data };
              }
              return message;
            });
          }
        });
      }
    }
  });

  const handleSendMessage = (newMessage) => {
    if (websocket.current && websocket.current.readyState === WebSocket.OPEN) {
      websocket.current.send(newMessage);
      if(newMessage !== '') {
        setMessages(messages => [...messages, { id: Date.now(), text: newMessage, sender: 'user' }]);
      }
    } else {
      console.log('WebSocket not connected');
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
            {sortedMessages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
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
            <Button style={{ padding: "10px 25px", marginRight: "10px" }}>
              Send
            </Button>
            <Button style={{ padding: "10px 25px" }}>End</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoroChat;
