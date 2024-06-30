import { useLenis } from "@studio-freight/react-lenis";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState, lazy } from "react";
import gsap from "gsap";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Highlights = lazy(() => import("./components/Highlights"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const CursorComponent = lazy(() => import("./components/CursorComponent"));

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  autoRefreshEvents: "load,visibilitychange,DOMContentLoaded",
})

const App = ({ scrollPosition }) => {
 
  const [ refreshRoutine, setRefreshRoutine ] = useState(false);

  const lenis = useLenis(() => {

    if(refreshRoutine){
      lenis.scrollTo(0, {immediate: true, force: true})
      lenis.stop();
    } 

  }, [refreshRoutine]);

  useEffect(() => {

    window.addEventListener("beforeunload", () => {
      setRefreshRoutine(true)
    })

    return () => {

      window.removeEventListener('beforeunload', () => {
        setRefreshRoutine(true)
      })
    }
  }, [])

    return (
      <>
        <CursorComponent />
        <Navbar />
        <Hero />
        <About scrollPosition={scrollPosition}/>
        <Highlights scrollPosition={scrollPosition}/>
        <Work scrollPosition={scrollPosition}/>
        <Contact scrollPosition={scrollPosition}/>
      </>
    )
}

export default trackWindowScroll(App);
