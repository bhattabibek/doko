import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [Isseller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {
    navigate,
    user,
    setUser,
    Isseller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
