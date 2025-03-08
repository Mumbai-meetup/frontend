import { useState } from "react";
import Logo from "@/assets/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-99">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="size-12 rounded-xl" />
          <span className="font-bold text-xl">
            Mumbai Meetup
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#events"
            className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Events
          </a>
          <a
            href="#community"
            className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Community
          </a>
          <a
            href="#about"
            className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="#join"
          className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Join Us
        </a>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <a
            href="#home"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#events"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Events
          </a>
          <a
            href="#community"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Community
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
          <a
            href="#join"
            className="block py-2 px-4 text-indigo-600 font-medium hover:bg-gray-100"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
