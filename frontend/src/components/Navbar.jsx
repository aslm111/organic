import { useState } from "react";
import { FiSearch, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/organicfiberlogo.svg";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "Sales", path: "/sale" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-grey shadow-sm py-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center">
            <img src={logo} alt="Organic Fiber" className="h-14 mr-2" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="  text-gray-800 hover:text-brightGreen transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-brightGreen focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative grid place-items-center">
              <FiShoppingCart className="text-2xl text-darkGreen" />
              <div className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-xs text-white transform translate-x-1/2 -translate-y-1/2">
                {10}
              </div>
            </div>
            <div className=" bg-darkGreen h-8 w-8 rounded-full flex items-center justify-center">
              <IoPersonSharp className="text-grey text-lg" />
            </div>
          </div>

          {/*for mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brightGreen focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-gray-700 hover:text-brightGreen transition-colors py-2 px-4 rounded hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}

              {/* search */}
              <div className="relative px-4 sm:hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brightGreen focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
