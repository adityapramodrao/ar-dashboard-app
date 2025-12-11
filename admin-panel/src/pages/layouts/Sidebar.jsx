import { NavLink } from "react-router-dom";
import { X, Home, User, ShoppingCart, LogOut } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 
          flex flex-col justify-between transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Top Section */}
        <div>
          {/* Logo + Close Button */}
          <div className="flex items-center justify-between px-5 h-20 border-b">
            <h1 className="text-2xl font-bold text-purple-600">MyDash</h1>

            <button
              className="lg:hidden text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={26} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="mt-5 px-4 space-y-2">
            <NavLink
              to="/dashboard"
              end // important: prevents dashboard staying active on child routes
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-purple-50 text-purple-600"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }`
              }
            >
              <Home size={20} /> Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/products"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-purple-50 text-purple-600"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }`
              }
            >
              <ShoppingCart size={20} /> Products
            </NavLink>

            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-purple-50 text-purple-600"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }`
              }
            >
              <User size={20} /> Users
            </NavLink>
          </nav>
        </div>

        {/* Bottom Logout */}
        <div className="p-4 border-t">
          <button
            className="flex items-center gap-3 w-full p-3 rounded-lg text-red-600 hover:bg-red-50 transition"
            onClick={() => alert("Logout clicked")}
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
