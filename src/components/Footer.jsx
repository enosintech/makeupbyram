import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const location = useLocation();
  const [ activeLocation, setActiveLocation ] = useState(location.pathname);

    return (
      <div className={`absolute h-[5%] z-50  md:px-3 ${activeLocation === "/" ? "bottom-0 left-0 right-0 mx-auto w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[30%]"  : "-bottom-5 left-3 w-[60%] sm:w-[45%] md:w-[38%] lg:w-[28%] xl:w-[20%]"} flex items-center justify-between translate-x-5 sm:translate-x-0`}
      >
        <span className="text-gray-500 font-arch-b uppercase text-[13px] w-[75%]">©makeupbyram {new Date().getFullYear()}</span>
        <div className="flex w-[25%] pr-5 justify-evenly">
          <a href="https://www.instagram.com/makeupby.ram/?next=%2Fkhanboy7637%2Ftagged%2F&hl=af" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white" className="hover:opacity-75 active:opacity-50 cursor-pointer select-none"/></a>
          <a><FontAwesomeIcon icon={faTiktok} color="white" className="hover:opacity-75 active:opacity-50 cursor-pointer select-none"/></a>
        </div>
      </div>
    )
  }

export default Footer;
