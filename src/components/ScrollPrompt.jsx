import Lottie from "lottie-react";
import { useLenis } from "@studio-freight/react-lenis";

import { scrollDown } from "../lib";

const ScrollPrompt = (props) => {
  
  const lenis = useLenis();

  const handleClick = () => {
    lenis.scrollTo(props.target, {
      immediate: true,
    })
  }

  return (
    <Lottie animationData={scrollDown} loop={true} className={`size-20 sm:size-28 xl:size-40 absolute bottom-8 sm:bottom-5 md:bottom-2 left-0 ${props.id === "noclick" ? "" : "cursor-pointer clickable"}`} style={{
        transform: `rotate(${props.rotate}deg)`
    }} onClick={handleClick}/>
  )
}

export default ScrollPrompt;