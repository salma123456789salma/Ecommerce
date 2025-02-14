import { createContext, useState } from "react";

export const WishListContext = createContext();

export default function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  function toggleWishList(product) {
    setWishList(prevList => {
      const isExist = prevList.some(item => item._id === product._id);
      if (isExist) {
        return prevList.filter(item => item._id !== product._id);
      } else {
        return [...prevList, product];
      }
    });
  }

  return (
    <WishListContext.Provider value={{ wishList, toggleWishList }}>
      {children}
    </WishListContext.Provider>
  );
}