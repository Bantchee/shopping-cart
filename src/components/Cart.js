import React from "react";
import Product from "./CartProduct.js";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ products, onClickCloseCart, incrementProductQuantity, decrementProductQuantity, removeProductFromCart }) => {
    return (
        <div>
            <div>
            <button
                onClick={onClickCloseCart}
            >
                <FontAwesomeIcon icon={faX} />
            </button>
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
                            removeProduct={() => removeProductFromCart(product.name)}
                        />
                    </div>
                    )
                })
            }
            </div>
            <div>
                <p>
                    Total: ${products.reduce((value, product) => value + (product.price * product.quantity), 0)}.00
                </p>
                <button>Checkout</button>
            </div>
            
            </div>
        </div>
    );
};

export default Cart;