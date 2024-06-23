import { useLenis } from "@studio-freight/react-lenis";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Detector } from 'detector-js';
import { useEffect, useState, useLayoutEffect } from "react";
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

  const  [ height, setHeight ] = useState(window.innerHeight);

  const setHeightFunc = () => {
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    setHeightFunc();

    window.addEventListener("resize", setHeightFunc)

    return () => {
      window.removeEventListener("resize", setHeightFunc);
    }

  }, [])

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
        <Hero height={height}/>
        <About height={height} scrollPosition={scrollPosition}/>
        <Highlights height={height} scrollPosition={scrollPosition}/>
        {/* <Work scrollPosition={scrollPosition}/> */}
        <Contact height={height} scrollPosition={scrollPosition}/>
      </>
    )
}

export default trackWindowScroll(App);
