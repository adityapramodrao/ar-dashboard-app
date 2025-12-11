// src/components/SessionExpiredModal.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const SessionExpiredModal = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(logout());
        onClose();
        window.location.href = "/";
      }, 3000); // auto redirect after 3 sec

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold mb-2">Session Expired</h2>
        <p className="text-gray-600">You will be redirected to login.</p>
      </div>
    </div>
  );
};

export default SessionExpiredModal;
