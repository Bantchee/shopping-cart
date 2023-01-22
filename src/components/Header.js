import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ showCart, setShowCart }) => {
    return (
        <div 
            className="flex flex-col bg-neutral-800 py-4 gap-2 
                        lg:flex-row lg:justify-between lg:px-32
                        xl:px-48"
        >
            <Link to="/shopping-cart"
                className="flex justify-center"
            >
                <h1
                    className="text-4xl font-bold text-cyan-600 hover:text-cyan-400 text-center md:text-5xl lg:text-[4.0rem]"
                >
                    Gymshark
                </h1>
            </Link>
            <nav
                className="flex justify-center"
            >
                <ul
                    className="flex gap-6 md:gap-16"
                >
                    <Link to="/shopping-cart"
                        className="mt-auto mb-auto"
                    >
                        <li
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-600 hover:text-cyan-400"
                        >
                            Home
                        </li>
                    </Link>
                    
                    <Link to="/shopping-cart/shop"
                        className="mt-auto mb-auto"
                    >
                        <li
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-600 hover:text-cyan-400"
                        >
                            Shop
                        </li>
                    </Link>
                    <li>
                        <button 
                            onClick={() => setShowCart(!showCart)}
                            className="cursor-pointer p-4 bg-cyan-600 rounded-full relative hover:bg-cyan-400"
                        >
                            <FontAwesomeIcon 
                                icon={faShoppingCart} 
                                className="text-xl md:text-3xl lg:text-4xl inset-0"
                            />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;