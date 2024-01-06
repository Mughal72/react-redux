/* eslint-disable jsx-a11y/alt-text */

import React from "react";
function Home(props) {
//   console.warn("Home", props);
console.warn("remove", props)
  return (
    <div>
      {/* <div className="add-to-cart">
        <img src="https://cdn.rentechdigital.com/common_files/blogs/10-best-add-to-cart-apps-in-shopify-swipecart-blog-1-28-04-23.png" />
      </div> */}
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://image01.realme.net/general/20231129/17012403962026a15564d103748a6931a17233c223eb7.png.webp" />
        </div>
        <div className="text-wrapper item">
          <span>realme c51</span>
          <br />
          <span>Price: $29,999</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 30000, name: "realme c51" })
            }>  Add to Cart   </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          > Remove to Cart </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
