import ShopProduct from "./ShopProduct";
import React from "react";

const Shop = ({ products, addProductToCart}) => {
    return (
      <div
        className="p-4"
      >
        {
          products.map((product, index) => {
            return (
              <div key={index}>
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