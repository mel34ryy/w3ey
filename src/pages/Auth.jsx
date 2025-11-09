import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth({ defaultSignIn = true }) {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(defaultSignIn);

  useEffect(() => {
    setSignIn(defaultSignIn);
  }, [defaultSignIn]);

  const go = (toSignIn) => {
    setSignIn(toSignIn);
    navigate(toSignIn ? "/login" : "/signup", { replace: true });
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
          <form className="auth-form">
            <h1 className="auth-title">Sign in</h1>
            <input className="auth-input" type="email" placeholder="Email" />
            <input
              className="auth-input"
              type="password"
              placeholder="Password"
            />
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
                Enter Your personal details and start journey with us
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
