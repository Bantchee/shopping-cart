import React from "react";

const CartProduct = ({name, img, price, quantity, incrementQuantity, decrementQuantity }) => {

  return(
    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{price * quantity}</p>
      <div>
        <button
            onClick={incrementQuantity}
        >
            +
        </button>
        <p>{quantity}</p>
        <button
            onClick={decrementQuantity}
        >
            -
        </button>
      </div>
      
    </div>
  );
}

export default CartProduct;