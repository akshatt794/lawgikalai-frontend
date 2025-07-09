import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post(
        "https://lawgikalai-auth-api.onrender.com/api/auth/login",
        { identifier, password }
      );
      localStorage.setItem("token", res.data.token);
      setMsg("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setMsg("Invalid credentials.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #4751f3 0%, #23233b 100%)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#181925",
          padding: "38px 32px 28px",
          borderRadius: 18,
          boxShadow: "0 8px 40px 0 rgba(31,38,135,0.25)",
          width: "100%",
          maxWidth: 380,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h2 style={{
          color: "#fff",
          marginBottom: 12,
          textAlign: "center",
          letterSpacing: 1
        }}>
          Admin Login
        </h2>
        <input
          placeholder="Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          style={{
            padding: "13px",
            borderRadius: 8,
            border: "1px solid #35385a",
            background: "#202238",
            color: "#fff",
            fontSize: "1rem",
            outline: "none"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "13px",
            borderRadius: 8,
            border: "1px solid #35385a",
            background: "#202238",
            color: "#fff",
            fontSize: "1rem",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "13px",
            background: "linear-gradient(90deg, #5571f9 0%, #6e8efb 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.2s",
            marginTop: 6,
            boxShadow: "0 2px 8px 0 rgba(87,94,207,0.15)",
          }}
        >
          Login
        </button>
        {msg && (
          <p style={{
            color: msg === "Login successful!" ? "#00D98C" : "#ff4e4e",
            marginTop: 15, textAlign: "center"
          }}>
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}
