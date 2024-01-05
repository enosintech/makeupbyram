import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const location = useLocation();
  const [ activeLocation, setActiveLocation ] = useState(location.pathname);

    return (
      <div className={`absolute w-[40%] h-[5%] z-50 bottom-2 px-3 ${activeLocation === "/" ? "right-3" : "left-3"} flex items-center justify-evenly`}
      >
        <span className="text-gray-500 font-arch-b uppercase text-[13px]">©makeupbyram {new Date().getFullYear()}</span>
        <div className="flex w-[25%] pr-5 justify-evenly">
          <a href="https://www.instagram.com/makeupby.ram/?next=%2Fkhanboy7637%2Ftagged%2F&hl=af" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white" className="hover:opacity-75 active:opacity-50 cursor-pointer select-none"/></a>
          <a><FontAwesomeIcon icon={faTiktok} color="white" className="hover:opacity-75 active:opacity-50 cursor-pointer select-none"/></a>
        </div>
      </div>
    )
  }

export default Footer;
