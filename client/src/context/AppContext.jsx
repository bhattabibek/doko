import React, { createContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Isseller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products,SetProducts] = useState([]);

  const fetchProductdata = async () => {
  SetProducts(dummyProducts)
  }
useEffect(()=>{
fetchProductdata();
},[products])

  const value = {
    user,
    setUser,
    Isseller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
