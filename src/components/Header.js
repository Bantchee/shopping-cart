import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ showCart, setShowCart }) => {
    return (
        <div>
            <Link to="/shopping-cart">
                <h1>Gymshark</h1>
            </Link>
            <nav>
                <ul>
                    <Link to="/shopping-cart">
                        <li>Home</li>
                    </Link>
                    
                    <Link to="/shopping-cart/shop">
                        <li>Shop</li>
                    </Link>
                    <li>
                        <button 
                            class="cursor-pointer"
                            onClick={() => setShowCart(!showCart)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;