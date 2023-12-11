import React from "react";
import useScrollPositon from "../../hook/useScrollPositon";
import "./index.scss";

function Header() {
  const [scroll] = useScrollPositon(150)
  

  return (
    <header
      className={`header ${!scroll ? "active" : ""}`}
    >
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
          <i class="fa-solid fa-basket-shopping"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
