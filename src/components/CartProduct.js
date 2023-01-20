import React from "react";
import { useEffect } from "react";

const CartProduct = ({name, img, price, quantity, incrementQuantity, decrementQuantity, removeProduct }) => {
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
      <button
        onClick={removeProduct}
      >
          Delete
      </button>
    </div>
  );
}

export default CartProduct;