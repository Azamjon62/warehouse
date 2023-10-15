import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  console.log(isLogin);
  useEffect(() => {
    if (isLogin) {
      localStorage.removeItem("token");
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
