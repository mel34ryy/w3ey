import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuth(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleAuthChange);

    return () => window.removeEventListener("storage", handleAuthChange);
  }, []);

  if (!isAuth) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return children;
}
