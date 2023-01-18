import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div>
            <p>Made By J. Steven Jarrett</p>
            <FontAwesomeIcon icon={faGithub}/>
        </div>
    )
}

export default Footer;