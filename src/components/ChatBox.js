import React, { useState } from "react";
import "./ChatBox.css";

function ChatBox({ token }) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  async function handleAsk() {
    const res = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({ question, user: "shreyash" })
    });
    const data = await res.json();
    setResponse(data.response);
  }

  return (
    <div className="chat-container">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Tapke AI..."
        className="chat-input"
      />
      <button onClick={handleAsk} className="chat-button">Ask</button>
      <div className="chat-response">
        <strong>Response:</strong> {response}
      </div>
    </div>
  );
}

export default ChatBox;
