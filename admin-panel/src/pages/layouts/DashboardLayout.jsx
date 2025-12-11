import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

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

export default Layout;
