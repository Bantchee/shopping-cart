import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Gymshark</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <li>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;