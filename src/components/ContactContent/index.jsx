import React from "react";
import "./index.scss";

function ContactContent() {
  return (
    <section id="cContent">
      <div className="sendMessage">
        <h3>Send Us A Message</h3>
        <div className="emailBox">
        <i class="fa-regular fa-envelope"></i>
        <input type="text" placeholder=" Your Email Address" />
        </div>
        <textarea name="" id="" cols="50" rows="20"></textarea>

      </div>
    </section>
  );
}

export default ContactContent;
