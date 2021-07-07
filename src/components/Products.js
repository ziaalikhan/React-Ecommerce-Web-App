import React from "react";
import { useStateValue } from "../config/StateProvider";
import "./Products.css";

function Products({id, title, Image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();

  
 
  const addToBasket = ()=> {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        Image: Image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className="products">
      <div className="card" style={{ width: "18rem" }}>
  <img src={Image} width='100px' height='250px' className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <div className="prduct_rating">
{Array(rating)
.fill()
.map((_, i) => (
<p>⭐</p>
))}
</div>
    <h5 className="card-title">Price : ${price}</h5>
    <button onClick={addToBasket}  className="btn btn-primary">
      Add To Basket
    </button>
  </div>
</div>


    </div>
  );
}

export default Products;



// 



{/* <div className="main_cards">
<img src={Image} alt="Images" />

<div className="product_info">
<p>{title}</p>
<p className="product_price">
<small>$</small>
<strong>{price}</strong>
</p>

<div className="prduct_rating">
{Array(rating)
.fill()
.map((_, i) => (
<p>⭐</p>
))}
</div>
</div>
<button onClick={addToBasket}>Add to Cart</button>
</div> */}