import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import Modal from "../Modal";
// import { BasketContext } from "../../Context/BasketProvider";

function Products() {
  const [apidata, setApidata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  // const {basket, HandleBasket} = useContext(BasketContext)
  const [isOpen, setIsOpen] = useState(false);
  const [propIndex, setPropIndex] = useState()

  function handleModal() {
    setIsOpen(!isOpen);
    const index = apidata.findIndex
  }


  async function GetData() {
    const res = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    );
    const data = await res.json();
    setApidata(data);
    setLoading(false);
  }

  useEffect(() => {
    GetData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? apidata
      : apidata.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section id="Products">
        <div className="productsTitle">
          <h1>PRODUCT OVERVIEW</h1>
        </div>
        <div className="productFilter">
          <div className="productBtns">
            <ul>
              <li onClick={() => handleCategoryClick("All")}>All Products</li>
              <li onClick={() => handleCategoryClick("Womens")}>Women</li>
              <li onClick={() => handleCategoryClick("Mens")}>Men</li>
              <li onClick={() => handleCategoryClick("Kids")}>Kids</li>
            </ul>
          </div>
        </div>
        <div className="productFetched">
        {isOpen ? <Modal check={isOpen} setcheck={setIsOpen} propid={}></Modal> : null}
          {filteredProducts.map((x) =>
            loading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="card" key={x.id}>
                <div className="cardImg">
                  <img src={x.thumbnail} alt="" />
                  <i class="fa-regular fa-heart"></i>
                </div>
                <p>{x.name}</p>
                <h5>${x.price}</h5>
                <button onClick={handleModal}>open</button>
                
              </div>
              
            )
          )}
          
        </div>
      </section>
    </>
  );
}

export default Products;
