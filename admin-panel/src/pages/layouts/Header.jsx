import { Menu } from "lucide-react";

const Header = ({ setIsOpen }) => {
  return (
    <header className="h-16 bg-white shadow-xl flex items-center px-4 lg:px-6">
      <button
        className="lg:hidden text-gray-600"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={26} />
      </button>

      <h1 className="ml-3 font-semibold text-lg">Dashboard</h1>
    </header>
  );
};

export default Header;
