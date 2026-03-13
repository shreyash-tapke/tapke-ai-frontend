import React, { useState } from "react";
import "./Login.css";

function Login({ setToken }) {
  const [user, setUser] = useState("");

  function handleLogin() {
    const token = btoa(user); // simple free placeholder auth
    setToken(token);
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Tapke AI</h2>
      <input 
        value={user} 
        onChange={(e) => setUser(e.target.value)} 
        placeholder="Enter username" 
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
}

export default Login;
