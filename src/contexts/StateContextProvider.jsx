import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState({
    loggedIn: localStorage.getItem("token") ? true : false,
  });
  return (
    <StateContext.Provider
      value={{
        isSignUp,
        setIsSignUp,
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
