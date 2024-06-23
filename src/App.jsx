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
  ignoreMobileResize: false
})

const App = ({ scrollPosition }) => {

  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
 
  const [ refreshRoutine, setRefreshRoutine ] = useState(false);
  const [ stopScrolling, setStopScrolling ] = useState(false);

  const lenis = useLenis(() => {

    if(refreshRoutine){
      lenis.scrollTo(0, {immediate: true, force: true})
      lenis.stop();
    } 
    
    if(stopScrolling){
      lenis.stop()
    } else {
      lenis.start()
    }

  }, [stopScrolling, refreshRoutine]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setStopScrolling(true)

      setTimeout(() => {
        setStopScrolling(false)
      }, 2000);
    });

    window.addEventListener("beforeunload", () => {
      setRefreshRoutine(true)
    })

    return () => {
      window.removeEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        setStopScrolling(true)
  
        setTimeout(() => {
          setStopScrolling(false)
        }, 2000);
      })

      window.removeEventListener("beforeunload", () => {
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
        {/* <Work scrollPosition={scrollPosition}/> */}
        <Contact scrollPosition={scrollPosition}/>
      </>
    )
}

export default trackWindowScroll(App);
