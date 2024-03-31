import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
  return (
    <ReactLenis root options={{lerp: 0.07, duration: 3, smoothTouch: true}}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
