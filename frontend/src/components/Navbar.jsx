import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/leaf-icon.svg"
              alt="Organic Fiber"
              className="h-6 w-6 mr-2"
            />
            <span className="text-green-700 font-semibold text-lg">
              Organic Fiber
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Products
            </a>
            <a
              href="/sale"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Sale
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
