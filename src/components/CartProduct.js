import React from "react";
import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({name, img, price, quantity, incrementQuantity, decrementQuantity, removeProduct }) => {
  return(
    <div
      className="border-2 border-neutral-800 rounded-lg p-4 flex flex-col items-center text-2xl font-bold text-neutral-800 w-fit mx-auto
                  md:text-xl
                  lg:text-2xl"
    >
      <img 
        src={img} 
        alt={name} 
        className="rounded-lg w-64"
      />
      <p>{name}</p>
      <p>${price * quantity}.00</p>
      <div
        className="flex gap-2 text-4xl font-bold"
      >
        <button
            onClick={decrementQuantity}
            className="hover:bg-slate-300 p-2 w-16 rounded-lg"
        >
            <FontAwesomeIcon icon={faSubtract} />
        </button>
        <p
          className="bg-neutral-800 text-cyan-500 p-2 w-16 rounded-lg text-center"
        >
          {quantity}
        </p>
        <button
            onClick={incrementQuantity}
            className="hover:bg-slate-300 p-2 w-16 rounded-lg"
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <button
        onClick={removeProduct}
        className="bg-neutral-800 text-cyan-500 p-2 rounded-lg text-center mt-4 text-4xl"
      >
          Delete
      </button>
    </div>
  );
}

export default CartProduct;