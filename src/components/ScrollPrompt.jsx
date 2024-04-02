import Lottie from "lottie-react";

import { scrollDown } from "../lib";

const ScrollPrompt = (props) => {
  return (
    <Lottie animationData={scrollDown} loop={true} className="size-20 sm:size-28 xl:size-40 absolute bottom-8 sm:bottom-5 md:bottom-2 left-0" style={{
        transform: `rotate(${props.rotate}deg)`
    }}/>
  )
}

export default ScrollPrompt;