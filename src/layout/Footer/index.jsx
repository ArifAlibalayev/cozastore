import React from "react";
import "./index.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="upperFooter">
        <div className="footerCategories">
          <ul>
            <h3>CATEGORIES</h3>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>
        <div className="footerHelp">
          <ul>
            <h3>HELP</h3>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footerGetInTouch">
          <h3>GET IN TOUCH</h3>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="footerGITicons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
        <div className="footerNewsletter">
            <h3>NEWSLETTER</h3>
            <input type="text" placeholder="email@example.com" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
