import React, { useState } from "react";

function ChatBox() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [token, setToken] = useState(""); // JWT token if needed

  const handleAsk = async () => {
    try {
      const res = await fetch("https://tapkeai-backend.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({ question, user: "shreyash" })
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error("Error fetching response:", err);
      setResponse("Error connecting to backend.");
    }
  };

  return (
    <div className="chatbox">
      <h2>Tapke AI Chat</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleAsk}>Ask</button>
      <div className="response">
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default ChatBox;
