import { useLenis } from "@studio-freight/react-lenis";
import Lottie from "lottie-react";

import { scrollDown } from "../lib";

const ScrollPrompt = (props) => {
  
  const lenis = useLenis();

  const handleClick = () => {
    lenis.scrollTo(props.target, {
      immediate: true,
    })
  }

  return (
    <div className={`flex flex-col text-center absolute ${props.bottom ? "md:bottom-5 bottom-6 left-4" : "bottom-8 sm:bottom-5 md:bottom-2 left-0"}`}>
      <Lottie animationData={scrollDown} loop={true} className={`size-20 sm:size-28 ${props.bottom ? "xl:size-28" : "xl:size-40"} ${props.id === "noclick" ? "" : "clickable"}`} style={{
          transform: `rotate(${props.rotate}deg)`
      }} onClick={handleClick}/>
      {
        props.bottom &&
          <p className="font-nohemiMedium tracking-tight text-white text-[14px]">BACK TO TOP</p>
      }
    </div>
  )
}

export default ScrollPrompt;