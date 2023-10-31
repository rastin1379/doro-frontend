import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLoggedIn } from "../../store/slices/authSlice";
import Navbar from "../Navbar";
import "../../styles/DoroChat.css";

function DoroChat() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="chat-wrapper">
      <div className="chat-section">
        <Navbar />
      </div>
    </div>
  );
}

export default DoroChat;
