import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Isseller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {
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
