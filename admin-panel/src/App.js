// src/App.js
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./features/auth/authSlice";
import SessionExpiredModal from "./pages/SessionExpiredModal";

const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes

function App() {
  const dispatch = useDispatch();
  const [isSessionExpired, setIsSessionExpired] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSessionExpired(true);
    }, SESSION_TIMEOUT);

    // reset timer on user activity
    const resetTimer = () => {
      clearTimeout(timer);
      setTimeout(() => setIsSessionExpired(true), SESSION_TIMEOUT);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  const handleCloseModal = () => {
    dispatch(logout());
    window.location.href = "";
  };

  return (
    <>
      <SessionExpiredModal isVisible={isSessionExpired} onClose={handleCloseModal} />
      <AppRoutes />
    </>
  );
}

export default App;
