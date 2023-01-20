import React from "react";
import Product from "./CartProduct.js";

const Cart = ({ products, incrementProductQuantity, decrementProductQuantity }) => {
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
                            incrementQuantity={() => incrementProductQuantity(product.name)}
                            decrementQuantity={() => decrementProductQuantity(product.name)}
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