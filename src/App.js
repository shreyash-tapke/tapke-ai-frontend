import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Tapke AI</h1>
        <h3 className="app-author">Author: Shreyash Tapke</h3>
      </header>
      <main className="app-main">
        {!token ? <Login setToken={setToken} /> : <ChatBox token={token} />}
      </main>
      <footer className="app-footer">
        © 2026 Tapke AI — Author: Shreyash Tapke
      </footer>
    </div>
  );
}

export default App;
