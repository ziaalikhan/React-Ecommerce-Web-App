import React from "react";
import "./Home.css";
import Products from "./Products";
import Banner from "../images/bannerrrr.jpg";

import Shoes from "../images/shoes.jfif";
import Mac from "../images/mac.jfif";
import watch from "../images/watche.jfif";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Banner} alt="" />

<div>
  <h3 className='featuredProducts'>Featured Products</h3>
</div>

        <div className="home_row">
          <Products
          id="90829332"
            title="Branded New Watch"
            price={49.99}
            Image={watch}
            rating={4}
          />
          <Products
          id="90829333"
            title="Branded New Shoes"
            price={29.99}
            Image={Shoes}
            rating={5}
          />
              <Products
          id="90829334"
            title="Branded New Watch"
            price={49.99}
            Image={watch}
            rating={4}
          />
          <Products
          id="90829335"
            title="Branded New Shoes"
            price={29.99}
            Image={Shoes}
            rating={5}
          />
        </div>

        <div className="home_row">
          <Products
          id="90829334"
            title="MacBook Pro 2020"
            price={369.99}
            Image={Mac}
            rating={3}
          />
          <Products
          id="9082935"
            title="Branded New Watch"
            price={59.99}
            Image={watch}
            rating={2}
          />
           <Products
          id="90829334"
            title="MacBook Pro 2020"
            price={369.99}
            Image={Mac}
            rating={3}
          />
          <Products
          id="9082935"
            title="Branded New Watch"
            price={59.99}
            Image={watch}
            rating={2}
          />
        </div>

        <div className="home_row">
          <Products
          id="90829336"
            title="Branded New MacBook"
            price={339.99}
            Image={Mac}
            rating={4}
          />
          <Products
          id="90829337"
            title="Branded New Watch"
            price={19.99}
            Image={watch}
            rating={4}
          />
           <Products
          id="90829336"
            title="Branded New MacBook"
            price={339.99}
            Image={Mac}
            rating={4}
          />
          <Products
          id="90829337"
            title="Branded New Watch"
            price={19.99}
            Image={watch}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
