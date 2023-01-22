import React from "react";

const ShopProduct = ({name, img, price, onClick }) => {

  return(
    <div
      className="border-2 border-neutral-600 rounded-lg p-4 flex flex-col gap-1 items-center text-lg font-bold text-neutral-800
                  md:text-2xl
                  lg:text-4xl"
    >
      <img 
        src={img} 
        alt={name} 
        className="rounded-lg"
      />
      <p>{name}</p>
      <p>${price}.00</p>
      <button onClick={onClick}
        className="bg-cyan-600 hover:bg-cyan-400 px-2 rounded-md"
      >Add To Cart</button>
    </div>
  );
}

export default ShopProduct;