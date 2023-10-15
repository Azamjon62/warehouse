import React, { createContext, useContext, useState } from "react";

export const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isSignUp, setIsSignUp }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);
