import React from "react";
import Product from "./CartProduct.js";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ products, onClickCloseCart, incrementProductQuantity, decrementProductQuantity, removeProductFromCart }) => {
    return (
        <div
            className="fixed flex justify-center w-[100%] h-[100%] bg-neutral-50 text-neutral-800 overflow-scroll
                        md:bg-[rgba(0,0,0,.3)] md:justify-end"
        >
            <div
                className="absolute flex flex-col justify-center gap-2 mx-8 my-4
                            md:bg-neutral-50 md:px-8 md:py-4 md:m-0 md:w-1/2"
            >
                <div
                    className="ml-auto"
                >
                    <button
                        onClick={onClickCloseCart}
                        className="hover:text-red-500"
                        >
                        <FontAwesomeIcon 
                            icon={faX} 
                            size="2x"
                        />
                    </button>
                </div>
                <div
                    class="flex flex-col gap-4">
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
                <div
                    className="text-3xl font-bold text-center flex flex-col gap-2"
                >
                    <p>
                        Total: ${products.reduce((value, product) => value + (product.price * product.quantity), 0)}.00
                    </p>
                    <button
                        className="bg-cyan-600 hover:bg-cyan-400 p-2 rounded-lg"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;