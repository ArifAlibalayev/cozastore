import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import LoadingComp from "../Loading";
import { BasketContext } from "../../Context/BasketContext";

function Modal({ check, setcheck, propid }) {
  const [apidata, setApidata] = useState([]);
  const [loading, setLoading] = useState(true);
  const {basket, AddToBasket} = useContext(BasketContext)


  function closeModal() {
    setcheck(!check);
  }


  
  async function GetData() {
    const res = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" +
        propid
    );
    const data = await res.json();
    setApidata(data);
    setLoading(false);
  }

  useEffect(() => {
    GetData();
  }, []);
  
  return (
    <>
      <div className="OverlayModal">
        <div className="Modal">
          {loading ? <LoadingComp/> :
          <div className="modalCard">
          <div className="modalImgBox">
            <img src={apidata.thumbnail} alt="" />
          </div>
          <div className="modalContent">
            <div className="modalSBM">
              <div className="addToBasket" onClick={()=>AddToBasket(apidata)}><i class="fa-solid fa-basket-shopping"></i></div>
              <div className="addToBasket"><i class="fa-solid fa-heart"></i></div>


            </div>
            <div className="modalTitle">
            <h3>{apidata.name}</h3>
            <p>$ {apidata.price}</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              officia voluptate illum qui placeat veritatis labore excepturi
              ipsum, fugit voluptatem.
            </span>
            </div>
          </div>
        </div>
          }
          <button onClick={closeModal}>X</button>
        </div>
      </div>

      {console.log(basket)}
    </>
  );
}

export default Modal;
