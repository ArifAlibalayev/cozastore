import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage';

export const WishlistContext = createContext();

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

  function AddToWishlist(item) {
    const index = wishlist.findIndex((x)=> x.id === item.id)
    if (index === -1) {
      setWishlist([...wishlist, { ...item}]);
    }else{
      setWishlist(wishlist.filter((x) => x.id !== item.id));
    }
  }


  const wishlistValue = {wishlist, setWishlist, AddToWishlist}
  return (
    <WishlistContext.Provider value={wishlistValue}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider