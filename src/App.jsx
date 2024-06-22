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

  function detectBrowser() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edg") > -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } else if (userAgent.indexOf("Opera") > -1) {
        return "Opera";
    } else if (userAgent.indexOf("Trident") > -1 || userAgent.indexOf("MSIE") > -1) {
        return "Internet Explorer";
    }

    return "Unknown";
  }

  const browserName = detectBrowser();

  const [ windowHeight, setWindowHeight ] = useState(browserName === "Chrome" || browserName === "Safari" ? "100lvh" : window.innerHeight);

  console.log(windowHeight)

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

  console.log(windowHeight)

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
