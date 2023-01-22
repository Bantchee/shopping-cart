import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
    return (
        <div
            className="flex flex-col gap-1 text-xl items-center bg-neutral-800 text-cyan-600 py-2
                        md:flex-row md:text-2xl md:justify-center md:gap-2
                        lg:text-3xl lg:gap-4
                        justify-self-end"
        >
            <p
                className="font-bold"
            >Made By J. Steven Jarrett</p>
            <a 
                href="https://github.com/Bantchee" 
                target={"_blank"} 
                rel="noreferrer"
            >
                <FontAwesomeIcon 
                    icon={faGithub}
                    size="2x"
                    className="hover:text-cyan-400"
                />
            </a>
        </div>
    )
}

export default Footer;