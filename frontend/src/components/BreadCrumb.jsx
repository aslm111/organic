import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <div className="flex items-center text-gray-500 text-sm">
      <span className="hover:text-green-700 cursor-pointer">Home</span>
      <FiChevronRight className="mx-2" />
      <span className="font-medium">Cart</span>
    </div>
  );
};

export default Breadcrumb;
