import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CursorComponent from "./components/CursorComponent";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const lenis = useLenis();

  lenis?.stop();

  setTimeout(() => {
    lenis?.start()
  }, 6500)

  window.addEventListener("beforeunload", () => {
    lenis?.scrollTo(0, {immediate: true, force: true})
    lenis?.stop();
  })

  return (
    <>
      <CursorComponent />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Work />
      <Contact />
    </>
  )
}

export default App;
