import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import RangeContextProvider from "../Context/RangeContext";

const InnerLayout = () => {
  return (
    <RangeContextProvider>
      <div className="w-full h-full bg-[#f0f0f0] flex">
        <Sidebar />
        <Outlet />
      </div>
    </RangeContextProvider>
  );
};

export default InnerLayout;
