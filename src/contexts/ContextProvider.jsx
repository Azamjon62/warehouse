import React, { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
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

export const useStateContext = () => useContext(StateContext);
