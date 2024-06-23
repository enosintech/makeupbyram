import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { about1ImagePlaceholder, about2ImagePlaceholder, aboutImage1, aboutImage2, aboutVideo, aboutVidPlaceImg, workedWithPlaceholderImage, workedWithVideo } from "../lib";
import { noTriggerToAnimations, pinAnimations, triggerToAnimations } from "../utils/animations";
import VidLoadingPrompt from "./VidLoadingPrompt";


const About = ({ scrollPosition }) => {

  gsap.registerPlugin(ScrollTrigger);

  const lenis = useLenis();

  const aboutRef = useRef(null);
  const aboutVidRef = useRef(null);
  const workedWithRef = useRef(null);
  const workedWithVideoRef = useRef(null);

  const handleRunwayClick = () => {
    lenis.scrollTo(".zeroTrigger", {
      duration: 6,
      offset: 10 / 100 *  window.outerHeight,
    })
  }

  const handleExperimentalClick = () => {
    lenis.scrollTo(".minusTrigger", {
      duration: 6,
      offset: 10 / 100 *  window.outerHeight,
    })
  }

  const handlePortraitsClick = () => {
    lenis.scrollTo(".oneTrigger", {
      duration: 6,
      offset: 10 / 100 *  window.outerHeight,
    })
  }

  const handleContactClick = () => {
    lenis.scrollTo(".contactTrigger", {
      offset: window.outerHeight,
      immediate: true
    })
  }

  useGSAP(() => {
    triggerToAnimations(".g_down", {
      scale: 1,
      ease: "power1",
    }, {
      trigger: ".g_down",
      toggleActions: "restart reverse restart reverse",
      start: "top 65%",
      end: "bottom -200%",
      scrub: 5.5,
    })

    triggerToAnimations(".stackIn", {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power1",
    }, {
      trigger: ".workedWithPin",
      start: "bottom center",
      toggleActions: "play none none reverse",
    })

    noTriggerToAnimations(".bounce", {
      width: window.innerWidth < 1024 ? 10 : 14,
      height: window.innerWidth < 1024 ? 10 : 14,
      ease: "power1.in",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    })

    ScrollTrigger.create({
      trigger: ".aboutPin",
      start: "top bottom",
      onEnter: () => {
        aboutVidRef.current.play();
        workedWithVideoRef.current.play();
      }
    })

    pinAnimations(aboutRef.current, "top top", () => "+=" + aboutRef.current.offsetHeight);

    pinAnimations(workedWithRef.current, "top top", () => "+=" + workedWithRef.current.offsetHeight * 3, true);

  }, [])

  return (
    
    <section id="aboutAnimateTrigger" style={{height: window.outerHeight * 4}} className="w-full flex flex-col overflow-x-hidden">
        <div ref={aboutRef} style={{height: window.outerHeight}} className="w-full relative bg-white flex flex-col py-1 aboutPin z-20">
          <span className="absolute bottom-5 left-2 sm:left-5 z-50 p-3 w-fit h-fit rounded-full border-4 border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"><p className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-nohemiRegular text-white">ESTABLISHED 2022</p></span>
          <span onClick={handleContactClick} className="hover:opacity-70 active:opacity-35 clickable absolute bottom-5 right-2 sm:right-5 z-50 p-3 w-fit h-fit rounded-full border-4 border-purple-950 bg-purple-950 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"><p className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-nohemiBold text-white">HIRE ME NOW</p></span>
          <div className="w-full h-full flex flex-col-reverse lg:flex-row-reverse gap-1 lg:gap-0">
            <div className="lg:w-1/2 w-full lg:h-full h-[60%] flex flex-col justify-center gap-1">
              <div className="w-full h-1/2 relative">
                <div className="w-full h-full absolute bottom-0 right-0 enlarge flex justify-center gap-2">
                  <div className="w-full h-full overflow-hidden">
                    <div className="w-full h-full scale-[2] g_down bg-white">
                      <LazyLoadImage 
                        alt="about Image"
                        src={aboutImage1}
                        className="w-full h-full object-cover object-center"
                        width={"100%"}
                        height={"100%"}
                        effect="blur"
                        placeholderSrc={about1ImagePlaceholder}
                        scrollPosition={scrollPosition}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-1/2 relative">
                <div className="w-full h-full absolute bottom-0 right-0 enlarge overflow-hidden">
                  <div className="w-full h-full scale-[2] g_down bg-white">
                      <LazyLoadImage 
                        alt="about Image"
                        src={aboutImage2}
                        className="w-full h-full object-cover object-center"
                        width={"100%"}
                        height={"100%"}
                        effect="blur"
                        placeholderSrc={about2ImagePlaceholder}
                        scrollPosition={scrollPosition}
                      />
                    </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-full  h-[40%] relative">
              <div className="lg:w-[99.5%] w-full h-full absolute bottom-0 left-0 enlarge2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-[-1] grid place-items-center">
                  <VidLoadingPrompt />
                  <img className="absolute w-full h-full object-cover top-0 left-0 z-[-1]" src={aboutVidPlaceImg} alt="about video placeholder"/>
                </div>
                <video ref={aboutVidRef} key={aboutVideo} className="w-full h-full object-cover" loop={true} muted={true} playsInline={true}>
                  <source src={aboutVideo} type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
        </div>
        <div ref={workedWithRef} style={{height: window.outerHeight}} className="workedWithPin w-full text-white relative z-10 flex flex-col items-center justify-center">
          <div className="w-full h-full absolute z-[-1] grid place-items-center">
            <div className="absolute top-0 left-0 w-full h-full z-[-1] grid place-items-center">
              <VidLoadingPrompt />
              <img className="absolute w-full h-full object-cover top-0 left-0 z-[-1]" src={workedWithPlaceholderImage} alt="worked with video placeholder"/>
            </div>
            <video ref={workedWithVideoRef} key={workedWithVideo} className="w-full h-full object-cover absolute z-[1]" loop={true} muted={true} playsInline={true}>
              <source src={workedWithVideo} type="video/mp4"/>
            </video>
          </div>
          <div className="w-full h-1/2 flex items-center justify-center">
            <div className="flex flex-col-reverse  justify-center text-2xl md:text-3xl lg:text-4xl xl:text-[5xl]">
              <div className="flex flex-col text-center items-center">
                <p className="mb-5 text-[16px] sm:text-xl font-nohemiMedium tracking-tight">SKIP TO WORK</p>
                <div className="flex justify-center w-[90vw] gap-4 md:gap-5 flex-wrap">
                  <span onClick={handleRunwayClick} className="rounded-full border-2 border-white p-2 md:p-3 lg:p-5 gap-x-2 md:gap-x-4 flex items-center justify-center hover:bg-white group transition-all trick">
                    <span className="lg:w-3 w-2 lg:h-3 h-2 rounded-full bg-white group-hover:bg-black transition-all bounce"/>
                    <p className="font-nohemiSemiBold group-hover:text-black transition-all">Runway</p>
                  </span>
                  <span onClick={handleExperimentalClick} className="rounded-full border-2 border-white p-2 md:p-3 lg:p-5 gap-x-2 md:gap-x-4 flex items-center justify-center hover:bg-white group transition-all trick">
                    <span className="lg:w-3 w-2 lg:h-3 h-2 rounded-full bg-white group-hover:bg-black transition-all bounce"/>
                    <p className="font-nohemiSemiBold group-hover:text-black transition-all">Experimental</p>
                  </span>
                  <span onClick={handlePortraitsClick} className="rounded-full border-2 border-white p-2 md:p-3 lg:p-5 gap-x-2 md:gap-x-4 flex items-center justify-center hover:bg-white group transition-all trick">
                    <span className="lg:w-3 w-2 lg:h-3 h-2 rounded-full bg-white group-hover:bg-black transition-all bounce"/>  
                    <p className="font-nohemiSemiBold group-hover:text-black transition-all">Portraits</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex justify-end">
            <div className="w-1/2 h-full flex flex-col items-end justify-end pb-5 pr-3 md:pr-6 lg:pr-10">
              <p className="font-nohemiMedium sm:text-lg md:text-xl tracking-tighter">WORKED WITH</p>
              <div className="flex flex-col gap-0 sm:gap-1 items-end text-3xl sm:text-5xl md:text-6xl font-nohemiSemiBold">
                <p className="mt-5 -translate-x-40 opacity-0 stackIn"><span className="font-nohemiExtraLight">Roberto</span>Carvalli</p>
                <p className="-translate-x-40 opacity-0 stackIn"><span className="font-nohemiExtraLight">Makeup</span>Miracle</p>
                <p className="-translate-x-40 opacity-0 stackIn"><span className="font-nohemiExtraLight">Polydextrous</span>Studios</p>
                <p className="-translate-x-40 opacity-0 stackIn"><span className="font-nohemiExtraLight">Misspetiteplanet</span>Malaysia</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About;
