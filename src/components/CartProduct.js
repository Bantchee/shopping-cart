import React from "react";

const CartProduct = ({name, img, price, quantity, incrementQuantity, decrementQuantity }) => {

  return(
    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <button>+</button>
        <p>{quantity}</p>
        <button>-</button>
      </div>
      
    </div>
  );
}

export default CartProduct;