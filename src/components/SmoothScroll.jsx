import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
  return (
    <ReactLenis options={{lerp: 0.05, duration: 1}}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
