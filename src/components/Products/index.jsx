import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import Modal from "../Modal";
import { WishlistContext } from "../../Context/WishlistContext";

function Products() {
  // fetch Api
  const [apidata, setApidata] = useState([]);

  // sort Categories
  const [selectedCategory, setSelectedCategory] = useState("All");

  // set Loading boolean
  const [loading, setLoading] = useState(true);

    // set modal button boolean
  const [isOpen, setIsOpen] = useState(false);

    // get id props for another component
  const [propIndex, setPropIndex] = useState();

    // set dropdown boolean
  const [searchDropdown, setSearchDropdown] = useState(false);

  // search array
  const [search, setSearch] = useState([]);

  // useContext for wishlist button 
  const {wishlist, AddToWishlist} = useContext(WishlistContext)


  function handleSearch(e) {
    setSearch(
      apidata.filter((x) =>
        x.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }


  function dropdown() {
    setSearchDropdown(!searchDropdown);
  }

  function handleModal(id) {
    setIsOpen(!isOpen);
    setPropIndex(id);
    
  }

  async function GetData() {
    const res = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    );
    const data = await res.json();
    setApidata(data);
    setSearch(data);
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
      ? search
      : search.filter((item) => item.category === selectedCategory)
      // apidata.map
      

      console.log(wishlist);
  return (
    <>
      <section id="Products">
        <div className="productsTitle">
          <h1>PRODUCT OVERVIEW</h1>
        </div>
        <div className="productFilter">
          <div className="productBtns">
            <ul>
              <li onClick={() => handleCategoryClick("All")} className={`${selectedCategory==='All' && "selected"}`}>All Products</li>
              <li onClick={() => handleCategoryClick("Womens")} className={`${selectedCategory==='Womens' && "selected"}`}>Women</li>
              <li onClick={() => handleCategoryClick("Mens")} className={`${selectedCategory==='Mens' && "selected"}`}>Men</li>
              <li onClick={() => handleCategoryClick("Kids")} className={`${selectedCategory==='Kids' && "selected"}`}>Kids</li>
            </ul>
          </div>
          <div className="searchProducts">
            <button onClick={dropdown}>Search</button>
            <div
              className={`dropdownSearch ${searchDropdown ? "dropped" : ""}`}
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder=" Search Products"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="productFetched">
          {isOpen ? (
            <Modal
              check={isOpen}
              setcheck={setIsOpen}
              propid={propIndex}
            ></Modal>
          ) : null}

          {filteredProducts.map((x) =>
          
            loading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="card" key={x.id}>
                <div className="cardImg">
                  <div onClick={() => handleModal(x.id)} className="detailsBtn">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                  <img src={x.thumbnail} alt="" />
                  <i class="fa-regular fa-heart " onClick={()=>AddToWishlist(x)}></i>
                </div>
                <p>{x.name}</p>
                <h5>${x.price}</h5>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
