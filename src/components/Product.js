import React from "react";

const Product = ({ id, name, img, price }) => {
    return(
    <div key={id}>
        <img src={img} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
        <button>Add To Cart</button>
      </div>
    );
}

export default Product;