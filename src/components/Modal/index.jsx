import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import LoadingComp from "../Loading";
import { BasketContext } from "../../Context/BasketContext";
import { Carousel } from "react-carousel-minimal";

function Modal({ check, setcheck, propid }) {
  const [apidata, setApidata] = useState([]);
  const [loading, setLoading] = useState(true);
  const { basket, AddToBasket } = useContext(BasketContext);

  function closeModal() {
    setcheck(!check);
    console.log(apidata.information.size.split(","));

  }

  

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }

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

  // const prods = apidata.information.size.split(',')
  // console.log(apidata.information.size)

  return (
    <>
      <div className="OverlayModal">
        <div className="Modal">
          {loading ? (
            <LoadingComp />
          ) : (
            <div className="modalCard" key={apidata.id}>
              <div className="modalImgBox">
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      padding: "0 120px",
                    }}
                  >
                    <Carousel
                      data={apidata.images.map((x) => {
                        return { image: x };
                      })}
                      time={2000}
                      width="100%"
                      height="90%"
                      // captionStyle={captionStyle}
                      radius="10px"
                      // slideNumber={true}
                      // slideNumberStyle={slideNumberStyle}
                      captionPosition="bottom"
                      automatic={true}
                      dots={true}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                      thumbnails={true}
                      thumbnailWidth="100px"
                      style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        // height: "50%",
                        margin: "40px auto",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="modalContent">
                <div className="modalSBM">
                  <div
                    className="addToBasket"
                    onClick={() => AddToBasket(apidata)}
                  >
                    <i class="fa-solid fa-basket-shopping"></i>
                  </div>
                  <div className="addToBasket">
                    <i class="fa-solid fa-heart"></i>
                  </div>

                  <div className="productSize">
                    
                  </div>
                </div>
                <div className="modalTitle">
                  <h3>{apidata.name}</h3>
                  <p>$ {apidata.price}</p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum officia voluptate illum qui placeat veritatis labore
                    excepturi ipsum, fugit voluptatem.
                  </span>
                </div>
              </div>
            </div>
          )}
          <button onClick={closeModal} >X</button>
        </div>
      </div>

    </>
  );
}

export default Modal;
