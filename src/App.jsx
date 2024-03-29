import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App;
