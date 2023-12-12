import React, { useContext, useState } from "react";
import useScrollPositon from "../../hook/useScrollPositon";
import "./index.scss";
import { BasketContext } from "../../Context/BasketContext";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [scroll] = useScrollPositon(150);
  const { basket, DeleteItem } = useContext(BasketContext);

  function HandleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <header className={`header ${!scroll ? "active" : ""}`}>
      <nav id="headerNavigation">
        <div className="logoside">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
              alt=""
            />
          </div>
          <div className="logoBtns">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Features</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="sbmside">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-basket-shopping" onClick={HandleMenu}></i>
          <i class="fa-regular fa-heart"></i>
        </div>
      </nav>
      <div className={`toggleMenu ${!toggleMenu ? "toggleMenuActive" : ""}`}>
        <div className="menuClose" onClick={HandleMenu}>
          X
        </div>
        <div className="basketWrapper">
          <h3>Your Shopping cart: </h3>
          {basket.length ? basket.map((x) =>
             (
              <div className="basketCard">
                <div className="basketImgBox">
                  <button onClick={() => DeleteItem(x)}>X</button>

                  <img src={x.thumbnail} alt="" />
                </div>
                <div className="basketContent">
                  <h5>{x.name}</h5>
                  <p>${x.price}</p>
                </div>
              </div>
            )
          )
          
          : <h4 style={{padding:"10px",color:"#888888"}}> no items yet... </h4>

          }
          
        </div>
      </div>
      {!toggleMenu && <div className="menuOverlay" onClick={HandleMenu}></div>}
    </header>
  );
}

export default Header;
