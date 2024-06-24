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
