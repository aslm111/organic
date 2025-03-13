import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRange } from "../Context/RangeContext";
import { FaBars, FaTimes } from "react-icons/fa";

const sidebarItems = [
  {
    name: "All Products",
    action: (navigate) => {
      navigate("/products");
    },
  },
  {
    name: "Clothing",
    action: (navigate) => {
      navigate("clothing");
    },
  },
  {
    name: "Footwear",
    action: (navigate) => {
      navigate("footwear");
    },
  },
  {
    name: "Accessories",
    action: (navigate) => {
      navigate("accessories");
    },
  },
  {
    name: "Home Goods",
    action: (navigate) => {
      navigate("home");
    },
  },
  {
    name: "Beauty and Wellness",
    action: (navigate) => {
      navigate("beauty");
    },
  },
  {
    name: "Crafts and DIY",
    action: (navigate) => {
      navigate("crafts");
    },
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentCategoryPage = location.pathname.split("/")[2];
  const { range, setRange } = useRange();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (action) => {
    action(navigate);
    // Close sidebar on mobile after clicking
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const SidebarContent = () => (
    <div className="bg-lightGreen p-4 sm:p-5 md:p-6 rounded-lg shadow h-fit">
      <div className="flex justify-between items-center mb-4 md:mb-4">
        <h2 className="text-base sm:text-lg text-darkGreen font-semibold">
          Categories
        </h2>
        <button onClick={toggleSidebar} className="text-darkGreen md:hidden">
          <FaTimes size={20} />
        </button>
      </div>

      <ul className="space-y-1 sm:space-y-2">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            {(currentCategoryPage === "" ||
              currentCategoryPage === undefined) &&
            item.name === "All Products" ? (
              <li className="bg-brightGreen text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base">
                {item.name}
              </li>
            ) : (
              <li
                key={`item-${index}`}
                onClick={() => handleItemClick(item.action)}
                className={`text-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer text-sm sm:text-base ${
                  currentCategoryPage === item.name.toLowerCase().split(" ")[0]
                    ? "bg-brightGreen text-white"
                    : "bg-transparent text-gray-600 hover:text-green-600"
                } rounded`}
              >
                {item.name}
              </li>
            )}
          </div>
        ))}
      </ul>

      <div className="mt-6 sm:mt-7 md:mt-8">
        <h2 className="text-base sm:text-lg text-darkGreen font-semibold mb-3 md:mb-4">
          Filter By
        </h2>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-darkGreen text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              Price Range
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="w-full h-2 bg-darkGreen rounded-lg appearance-none cursor-pointer"
              style={{
                accentColor: "#4A9C42",
              }}
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-1">
              <span>Rs.0</span>
              <span>Rs.{range}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>

      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 bg-lightGreen p-2 rounded-full shadow-md md:hidden"
      >
        <FaBars size={20} className="text-darkGreen" />
      </button>

      <div className="hidden md:block w-64 lg:w-72 flex-shrink-0 p-4 lg:p-6">
        <SidebarContent />
      </div>
      <div
        className={`fixed inset-0  z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed top-0 left-0 h-fit w-64 sm:w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;
