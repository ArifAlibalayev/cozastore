import React, { useState } from "react";
import "./index.scss";

function Modal({ check, setcheck, propid}) {
  console.log(check);
console.log("Porsux");
  function closeModal() {
    setcheck(!check);
  }

  console.log(propid);
  return (
    <>
      <div className="OverlayModal">
        <div className="Modal">
          <h1>SALAM</h1>
          <button onClick={closeModal}>X</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
