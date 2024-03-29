import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
  return (
    <ReactLenis root options={{lerp: 0.065, duration: 1, smoothTouch: true}}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
