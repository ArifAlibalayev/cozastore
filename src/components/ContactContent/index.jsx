import React from "react";
import "./index.scss";

function ContactContent() {
  return (
    <>
      <section id="cContent">
        <div className="sendMessage">
          <h3>Send Us A Message</h3>
          <div className="emailBox">
            <i class="fa-regular fa-envelope"></i>
            <input type="text" placeholder=" Your Email Address" />
          </div>
          <textarea name="" id="" cols="50" rows="20"></textarea>
          <button>SUBMIT</button>
        </div>
        <div className="addressContact">
          <div className="addressf">
            <i class="fa-solid fa-location-dot"></i> <h4>Address</h4>
          </div>
          <p>
            Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
          </p>
          <div className="phoneNum">
            <i class="fa-solid fa-phone"></i>
            <h4>Lets Talk</h4>
          </div>
          <span>+1 800 1236879</span>
          <div className="SaleSupp">
            <i class="fa-regular fa-envelope"></i>
            <h4>Sale Support</h4>
          </div>
          <span>contact@example.com</span>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24319.785907768473!2d49.81804224285108!3d40.36511774307517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d71b8e4c5b9%3A0xfe50781c5645b252!2sPort%20Baku%20Mall!5e0!3m2!1sen!2saz!4v1702647869062!5m2!1sen!2saz"
        style={{border:"0"}}
        width="100%"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default ContactContent;
