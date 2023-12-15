import React, { useContext } from 'react'
import './index.scss'
import { WishlistContext } from '../../Context/WishlistContext'
import { Toaster } from 'react-hot-toast'

function WishlistSection() {
  const {wishlist, setWishlist, AddToWishlist} = useContext(WishlistContext)

  return (
    <section id='star'>
      <Toaster/>
     <div className="wishlistWrapper">
        <h2 style={{textAlign:"center"}}>Wishlist : </h2>
        <div className="productFetched">
        {wishlist.map(x=>(
          <div className="card" key={x.id}>
          <div className="cardImg">
            
            <img src={x.thumbnail} alt="" />
            <i class="fa-regular fa-heart " onClick={()=>AddToWishlist(x)}></i>
          </div>
          <p>{x.name}</p>
          <h5>${x.price}</h5>
        </div>
        ))}
        </div>
        
     </div>
    </section>
  )
}

export default WishlistSection