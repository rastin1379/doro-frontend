import React, { useState } from "react";
import Navbar from "../Navbar";
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
  const [showTerms, setShowTerms] = useState(true); // State to control the visibility of the terms popup

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => {
      let updatedMessages = [
        ...prevMessages,
        { id: Date.now(), text: newMessage, sender: "user" },
        {
          id: Date.now() + 1,
          text: "Hey Rastin! How have you been since our last session?",
          sender: "ai",
        },
      ];
      if (updatedMessages.length > 4) {
        // Adjust this number based on how many messages you want to display
        updatedMessages.shift(); // Remove one message from the beginning
        updatedMessages.shift(); // Remove one more message from the beginning
      }
      return updatedMessages;
    });
  };

  const handleAgree = () => {
    setShowTerms(false); // Hide the terms popup and remove blur
  };

  return (
    <>
      {showTerms && (
        <div className="terms-popup">
          <div className="terms-content">
            <h2>Disclaimer</h2>
            <p>
              Doro is designed to provide supportive dialogues and access to
              validated mental health questionnaires, fostering a proactive
              approach towards mental health awareness. However, it is not a
              substitute for professional medical advice, diagnosis, or
              treatment. The information and resources provided by Doro should
              not be used as a basis for making diagnostic or treatment
              decisions.
            </p>
            <p>
              If you or someone you know are in crisis or think you may have an
              emergency, please use the emergency call button on this page. It's
              imperative to consult with a qualified healthcare provider or
              mental health professional for personalized advice and treatment.
            </p>
            <p>
              Please note, the current version of Doro is intended for
              individuals 18 years of age or older.
            </p>
            <p>
              At its core, Doro's sole aspiration is to pave the way for early
              intervention in psychological well-being, nurturing a journey
              towards self-awareness and proactive mental health care.
            </p>
            <button onClick={handleAgree}>I AGREE</button>
          </div>
        </div>
      )}
      <div className={`chat-wrapper ${showTerms ? "blur" : ""}`}>
        <Navbar />
        <div className="chat-section">
          {messages.map((message) => (
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
        </div>
      </div>
    </>
  );
}

export default DoroChat;
