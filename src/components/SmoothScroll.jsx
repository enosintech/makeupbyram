import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect} from "react";
import gsap from "gsap";

const SmoothScroll = ({children}) => {

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1}}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
