import { useLenis } from "@studio-freight/react-lenis";
import { trackWindowScroll } from "react-lazy-load-image-component";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CursorComponent from "./components/CursorComponent";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true)

const App = ({ scrollPosition }) => {

  const lenis = useLenis(() => {
    
    window.addEventListener("beforeunload", () => {
      lenis.scrollTo(0, {immediate: true, force: true})
      lenis.stop();
    })

    return () => {
      window.removeEventListener("beforeunload", () => {
        lenis.scrollTo(0, {immediate: true, force: true})
        lenis.stop();
      })
    }
  }, []);

  return (
    <div className="wrapperLenis">
      <CursorComponent />
      <Navbar />
      <Hero />
      <About scrollPosition={scrollPosition}/>
      <Highlights scrollPosition={scrollPosition}/>
      <Work scrollPosition={scrollPosition}/>
      <Contact scrollPosition={scrollPosition}/>
    </div>
  )
}

export default trackWindowScroll(App);
