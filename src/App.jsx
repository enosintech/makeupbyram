import { useLenis } from "@studio-freight/react-lenis";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Detector } from 'detector-js';
import { useState } from "react";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CursorComponent from "./components/CursorComponent";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true
})

const App = ({ scrollPosition }) => {

  const detector = new Detector();

  console.log(detector.browser.name)

  const [ windowHeight, setWindowHeight] = useState(detector.browser.name === "Safari" || detector.browser.name === "Chrome" ? "100vh" : window.innerHeight);

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
