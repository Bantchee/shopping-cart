import ShopProduct from "./ShopProduct";
import React from "react";

const Shop = ({ products, addProductToCart}) => {
    return (
      <div
        className="p-8 flex flex-row flex-wrap gap-6 justify-center
                  lg:px-32"
      >
        {
          products.map((product, index) => {
            return (
              <div key={index} className="flex justify-center items-center">
                <ShopProduct 
                  name={product.name} 
                  img={product.img} 
                  price={product.price} 
                  onClick={() => addProductToCart(product.name, product.img, product.price)}
                />
              </div>
              )
          })
        }
      </div>
    );
  }
  
  export default Shop;