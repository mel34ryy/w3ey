import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";
import { toast } from "react-toastify";

export default function Auth({ defaultSignIn = true }) {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(defaultSignIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirectPath = params.get("redirect") || "/";

  useEffect(() => {
    setSignIn(defaultSignIn);
  }, [defaultSignIn]);

  const go = (toSignIn) => {
    setSignIn(toSignIn);
    navigate(toSignIn ? "/login" : "/signup", { replace: true });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await res.json();
      console.log("DATA:", data);

      if (!res.ok) {
        toast.error("Wrong username or password");
        return;
      } else {
        toast.success("Login successful! 🎉");
        localStorage.setItem("token", data.accessToken);
        window.dispatchEvent(new Event("storage"));
        setTimeout(() => navigate(redirectPath), 1200);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="body">
      <div className="auth-container">
        <div
          className={`auth-form-container auth-sign-up-container ${
            !signIn ? "auth-right-panel-active" : ""
          }`}
        >
          <form className="auth-form">
            <h1 className="auth-title">Create Account</h1>
            <input className="auth-input" type="text" placeholder="Name" />
            <input className="auth-input" type="email" placeholder="Email" />
            <input
              className="auth-input"
              type="password"
              placeholder="Password"
            />
            <button className="auth-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={`auth-form-container auth-sign-in-container ${
            !signIn ? "auth-right-panel-active" : ""
          }`}
        >
          <form className="auth-form" onSubmit={handleLogin}>
            <h1 className="auth-title">Sign in</h1>

            <input
              className="auth-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <a href="#" className="href">
              Forgot your password?
            </a>

            <button className="auth-button" type="submit">
              Sign In
            </button>
          </form>
        </div>

        <div
          className={`auth-overlay-container ${
            !signIn ? "auth-right-panel-active" : ""
          }`}
        >
          <div
            className={`auth-overlay ${
              !signIn ? "auth-right-panel-active" : ""
            }`}
          >
            <div
              className={`auth-overlay-panel auth-overlay-left ${
                !signIn ? "auth-right-panel-active" : ""
              }`}
            >
              <h1 className="auth-title">Welcome Back!</h1>
              <p className="p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="auth-button auth-ghost"
                type="button"
                onClick={() => go(true)}
              >
                Sign In
              </button>
            </div>

            <div
              className={`auth-overlay-panel auth-overlay-right ${
                !signIn ? "auth-right-panel-active" : ""
              }`}
            >
              <h1 className="auth-title">Hello, Friend!</h1>
              <p className="p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="auth-button auth-ghost"
                type="button"
                onClick={() => go(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
