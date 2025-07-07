import React, { createContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Isseller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch products from dummy data
  const fetchProductData = async () => {
    setProducts(dummyProducts);
  };

  // ✅ Add item to cart
  const addToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };

  // ✅ Update item quantity
  const updateCartItem = (itemId, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated");
  };

  // ✅ Remove item from cart
  const removeFromCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] <= 0) {
        delete cartData[itemId];
      }
      setCartItems(cartData);
      toast.success("Item removed from cart");
    }
  };

  // ✅ Total cart item count
  const cartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // ✅ Total cart amount
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      const itemInfo = products.find((product) => product._id === item);
      if (itemInfo && cartItems[item] > 0) {
        totalAmount += cartItems[item] * itemInfo.offerPrice;
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }

    fetchProductData();
  }, []);

  // ✅ Save cart to localStorage when cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Global context value
  const value = {
    user,
    setUser,
    Isseller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartCount,
    totalCartAmount,
    searchQuery,
    setSearchQuery,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
