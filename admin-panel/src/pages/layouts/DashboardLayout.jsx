import { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { fetchUserMe } from "../../features/auth/authThunks";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // Fetch user on mount
  useEffect(() => {
    dispatch(fetchUserMe());
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN SECTION */}
      <div
        className="
          flex flex-col flex-1 
          transition-all duration-300
          lg:ml-64    /* add space when desktop */
        "
      >
        <Header setIsOpen={setIsOpen} />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
