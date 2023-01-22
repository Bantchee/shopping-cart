import React from "react";

const ShopProduct = ({name, img, price, onClick }) => {

  return(
    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={onClick}>Add To Cart</button>
    </div>
  );
}

export default ShopProduct;