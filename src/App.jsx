import { useLenis } from "@studio-freight/react-lenis";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CursorComponent from "./components/CursorComponent";

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.normalizeScroll(true);

ScrollTrigger.config({
  ignoreMobileResize: true
})

const App = ({ scrollPosition }) => {

  const [ windowHeight, setWindowHeight] = useState(window.innerHeight);

  const setHeight = () => {
    setWindowHeight(window.innerHeight);
  }

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

  useEffect(() => {
    setHeight();

    window.addEventListener("resize", setHeight)

    return () => {
      window.removeEventListener("resize", setHeight)
    }
  }, [])

  return (
    <>
      <CursorComponent />
      <Navbar />
      <Hero height={windowHeight}/>
      <About height={windowHeight} scrollPosition={scrollPosition}/>
      <Highlights height={windowHeight} scrollPosition={scrollPosition}/>
      <Work height={windowHeight} scrollPosition={scrollPosition}/>
      <Contact height={windowHeight} scrollPosition={scrollPosition}/>
    </>
  )
}

export default trackWindowScroll(App);
