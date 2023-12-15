import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage';
import toast from 'react-hot-toast';

export const WishlistContext = createContext();

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

  function AddToWishlist(item) {
    const index = wishlist.findIndex((x)=> x.id === item.id)
    if (index === -1) {
      setWishlist([...wishlist, { ...item}]);
      toast('added to wishlist')
    }else{
      setWishlist(wishlist.filter((x) => x.id !== item.id));
      toast('deleted from wishlist')
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