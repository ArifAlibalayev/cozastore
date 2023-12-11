import React from "react";
import "./index.scss";

function FilterSection() {
  return (
    <section id="Filter">
      <div className="filterBoxWrapper">
        <div className="filterBox">
          <div className="filterBanner">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"
              alt=""
            />
            <div className="filterContent">
                <h2>Women</h2>
                <p>Spring 2023</p>
            </div>
          </div>
          <div className="filterOverlay">
            
          </div>
        </div>
        <div className="filterBox">
          <div className="filterBanner">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp"
              alt=""
            />
            <div className="filterContent">
                <h2>Men</h2>
                <p>Winter 2023</p>
            </div>
          </div>
          <div className="filterOverlay">
            
          </div>
        </div>
        <div className="filterBox">
          <div className="filterBanner">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp"
              alt=""
            />
            <div className="filterContent">
                <h2>Accessories</h2>
                <p>New Trend</p>
            </div>
          </div>
          <div className="filterOverlay">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterSection;
