import React from "react";
import Product from "./CartProduct.js";

const Cart = ({ products, setProducts }) => {
    return (
        <div>
            <div>
            {
                products.map((product, index) => {
                    return (
                    <div key={index}>
                        <Product 
                        name={product.name} 
                        img={product.img} 
                        price={product.price} 
                        quantity={product.quantity}
                        />
                    </div>
                    )
          })
        }
            </div>
        </div>
    );
};

export default Cart;