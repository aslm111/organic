import React, { createContext, useContext, useState } from "react";

const RangeContext = createContext();

const RangeContextProvider = ({ children }) => {
  const [range, setRange] = useState(0);

  return (
    <RangeContext.Provider value={{ range, setRange }}>
      {children}
    </RangeContext.Provider>
  );
};
const useRange = () => useContext(RangeContext);

export default RangeContextProvider;
export { useRange };
