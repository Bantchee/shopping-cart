import Product from "./Product";
import React from "react";

const Shop = ({ products, addProductToCart}) => {
    return (
      <div>
        {
          products.map((product, index) => {
            return (
              <div key={index}>
                <Product 
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