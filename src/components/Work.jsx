import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { use100vh } from 'react-div-100vh';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "lottie-react";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { noTriggerToAnimations, pinAnimations, triggerToAnimations } from "../utils/animations";
import { creativeMakeup, shootMakeup } from "../constants";
import { Lips, runwayImage1, runwayImage2, featuredLeft1, featuredLeft2, featuredMain1, featuredMain2, featuredRight1, featuredRight2, lipsMain1, workVideoMain, animateAsteriskSvg, selectedWorksPlaceholderImage, runway2PlaceholderImage, runway1PlaceholderImage, lipsMain2, featuredMainPlaceholder1Img, featuredMainPlaceholder2Img, featuredLeftPlaceholder2Img, featuredLeftPlaceholder1Img, featuredRightPlaceholder1Img, featuredRightPlaceholder2Img, lips1PlaceholderImg, lips2PlaceholderImg } from "../lib";

import WorkSectionComponent from "./WorkSectionComponent";
import VidLoadingPrompt from "./VidLoadingPrompt";

const Work = ({ scrollPosition }) => {
  
  const lenis = useLenis();

  const finalPinRef = useRef(null);
  const pinHighRef = useRef(null);

  const height = use100vh();

  const handleContactClick = () => {
    lenis.scrollTo(".contactTrigger", {
      duration: 10,
      offset: window.innerHeight,
    })
  }

  useGSAP(() => {
    const imgs = gsap.utils.toArray(".motiv");
    const next = 0.5;
    const fade = 0.2;
    
    gsap.set(imgs[0], {autoAlpha: 1})

    const crossFade = () => {
        gsap.timeline()
        .to(imgs[0], {autoAlpha: 0, duration: fade})
        .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)

        imgs.push(imgs.shift())

        gsap.delayedCall(next, crossFade);
    }

    gsap.delayedCall(next, crossFade);

    triggerToAnimations(".pinText", {
      opacity: 1,
      ease: "power1",
      duration: 0.5,
    }, {
      trigger: ".pinTrigger",
      start: "top top",
      toggleActions: "play none none reverse"
    })

    triggerToAnimations(".toZero", {
      opacity: 1,
      ease: "power1",
      duration: 0.3,
    }, {
      trigger: ".minusTrigger",
      start: "top top",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations(".toOne1", {
      opacity: 1,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".zeroTrigger",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations("#nowFade", {
      opacity: 0,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".zeroTrigger",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations("#upFade", {
      opacity: 0,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".oneTrigger",
      start: "top top",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations("#upFade2", {
      opacity: 0,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".twoTrigger",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations(".toOne2", {
      opacity: 1,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".oneTrigger",
      start: "top top",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations(".toOne3", {
      opacity: 1,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".twoTrigger",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations("#barWorkText", {
      opacity: 0,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".pinHigh",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations("#barFeaturedText", {
      opacity: 1,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".pinHigh",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations(".growUp", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    }, {
      trigger: ".growUpTrigger",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    })

    triggerToAnimations(".toLife", {
      opacity: 1,
      ease: "power1",
    }, {
      trigger: ".lipsOpacityTrigger",
      start: "top bottom",
      toggleActions: "play none none reverse",
    })

    triggerToAnimations(".moveDown2", {
      y: -20,
      opacity: 1,
    }, {
      trigger: ".parallaxTrigger",
      start: "top bottom",
      end: "bottom top",
      scrub: 3.5
    })

    triggerToAnimations(".moveUp2", {
      y: 200,
      opacity: 0.0,
    }, {
      trigger: ".parallaxTrigger",
      start: "top bottom",
      end: "bottom top",
      scrub: 3.5
    })

    triggerToAnimations(".runwayImageScale", {
      scale: 1,
    }, {
      trigger: ".runwayImageScale",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 2.5,
    })  

    noTriggerToAnimations("#workScrollPrompt", {
      opacity: 1,
      y: 0,
      yoyo: true,
      repeat: -1,
    })

    ScrollTrigger.create({
      trigger: pinHighRef.current,
      end: () => "+=" + pinHighRef.current.offsetHeight,
      pin: true,
    })

    pinAnimations(".pinTrigger", "top", "top", "bottom" , "bottom", ".pinText");

    pinAnimations(".finalPin", "bottom", "bottom", "bottom", "0");

    pinAnimations(".pinTrigger", "top", "top", "bottom", "bottom", ".pinDiv");

  }, [])


  return (
    <section style={{height: height ? height * 8.5 : "850vh"}} className='w-full relative z-30 flex flex-col overflow-x-visible'>
      <div style={{height: height ? height : "100vh"}} className="w-full absolute top-0 left-0">
        <div className="pinText absolute top-5 text-white pt-2 sm:pt-5 left-2 sm:left-5 w-[700px] text-nowrap h-fit flex items-center text-2xl sm:text-3xl md:text-5xl opacity-0 z-20">
              <span className="absolute" id="nowFade"><p className="font-nohemiSemiBold opacity-0 toZero">EXPERIMENTAL MAKEUP</p></span>
              <span className="absolute" id="upFade"><p className="font-nohemiSemiBold opacity-0 toOne1">RUNWAY MAKEUP</p></span>
              <span className="absolute" id="upFade2"><p className="font-nohemiSemiBold opacity-0 toOne2">MAKEUP PORTRAITS</p></span>
              <p className="font-nohemiSemiBold absolute opacity-0 toOne3"></p>
            </div> 
        <div className="absolute w-full h-[6%] bg-white bottom-0 left-0 z-20 pinDiv flex items-center">
          <div className="w-full h-[85%] border-y-[3px] border-black flex items-center justify-between px-2 md:px-6">
            <div className="relative flex items-center w-[320px] h-[70%] text-nowrap">
              <p id="barWorkText" className="absolute text-black font-nohemiSemiBold md:text-xl">SELECTED WORKS</p>
              <p id="barFeaturedText" className="absolute text-black font-nohemiSemiBold md:text-xl opacity-0">FEATURED</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={animateAsteriskSvg} className="size-5 animate-spin" />
              <span className="hireButton cursor-pointer group"><p className="group-hover:text-purple-900 transition-all group-active:text-purple-950 font-nohemiSemiBold text-md sm:text-xl translate-y-[1px] w-fit min-w-[70px]" onClick={handleContactClick}>HIRE ME</p></span>
            </div>
          </div>
        </div>
      </div>
      <div ref={finalPinRef} className="w-full flex-col flex relative pinTrigger gap-1 finalPin">
        <div style={{height: height ? height : "100vh"}} className="w-full flex items-center justify-center relative">
          <div className="w-full h-full absolute top-0 left-0 grid place-items-center">
            <img className="w-full h-full object-cover absolute z-[-1]" src={selectedWorksPlaceholderImage} alt="work video placeholder" />
            <VidLoadingPrompt />
            <video className="absolute  w-full h-full top-0 left-0 object-cover" preload="none" key={workVideoMain} autoPlay={true} loop={true} muted={true} controls={false} playsInline={true}>
              <source src={workVideoMain} type="video/mp4"/>
            </video>
          </div>
          <div className="flex flex-col text-right text-white relative z-10">
            <p className="font-nohemiBold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Selected <span className="font-nohemiRegular">Works</span></p>
            <p className="font-nohemiExtraLight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">22' — Present</p>
          </div>
          <FontAwesomeIcon id="workScrollPrompt" icon={faChevronDown} className="absolute bottom-32 -translate-y-3 opacity-0 z-10" color="white" size="xl"/>
        </div>
        <div style={{height: height ? height * 1.6 : "160vh"}} className="w-full relative minusTrigger cursorTrigger">
          <WorkSectionComponent creativeMakeup={creativeMakeup} scrollPosition={scrollPosition} />
        </div>
        <div style={{height: height ? height : "100vh"}} className="w-full relative flex gap-1 zeroTrigger cursorTrigger">
          <div className="w-1/2 h-full overflow-hidden">
              <div className="w-full h-full scale-[2] runwayImageScale">
                <LazyLoadImage 
                  src={runwayImage1}
                  alt={"model on catwalk"}
                  className="w-full h-full object-cover object-top"
                  width={"100%"}
                  height={"100%"}
                  scrollPosition={scrollPosition}
                  placeholderSrc={runway1PlaceholderImage}
                  effect="blur"
                />
              </div>
          </div>    
          <div className="w-1/2 h-full overflow-hidden">
              <div className="w-full h-full scale-[2] runwayImageScale">
                <LazyLoadImage 
                  src={runwayImage2}
                  alt={"model on catwalk"}
                  className="w-full h-full object-cover object-top"
                  width={"100%"}
                  height={"100%"}
                  scrollPosition={scrollPosition}
                  placeholderSrc={runway2PlaceholderImage}
                  effect="blur"
                />
              </div>
          </div> 
        </div>
        <div style={{height: height ? height * 1.6 : "160vh"}} className="w-full relative oneTrigger z-10 cursorTrigger">
          <WorkSectionComponent shootMakeup={shootMakeup} scrollPosition={scrollPosition} />
        </div>
      </div>
      <div ref={pinHighRef}  style={{height: height ? height : "100vh"}} className="w-full bg-white flex md:flex-row flex-col md:gap-x-1 gap-y-1 md:gap-y-0 pinHigh twoTrigger relative overflow-y-visible">
        <div className="w-0 h-0 rounded-[9999px] absolute z-20 bg-black text-white top-0 bottom-0 my-auto left-0 right-0 mx-auto growUp flex items-center justify-center">
          <Lottie animationData={Lips} loop={true} className="relative z-10"/>
          <div className="w-full h-1/2 absolute top-0 flex items-end justify-center">
            <p className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] md:translate-y-10 font-nohemiBold text-center opacity-0 toLife flex items-center gap-x-10 md:gap-x-14 lg:gap-x-24 xl:gap-x-32"><span>LIPS</span><span>TO</span></p>
          </div>
          <div className="w-full h-1/2 absolute bottom-0 flex items-start justify-center">
            <p className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] md:-translate-y-10 font-nohemiBold text-center opacity-0 toLife flex items-center gap-x-10 md:gap-x-14 lg:gap-x-24 xl:gap-x-32"><span>DIE</span><span>FOR</span></p>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 relative">
          <LazyLoadImage 
            src={featuredMain1}
            alt="shifting image"
            className="w-full h-full object-cover"
            width={"100%"}
            height={"100%"}
            scrollPosition={scrollPosition}
            placeholderSrc={featuredMainPlaceholder1Img}
            effect="blur"
          />
          <div className="w-full h-full motiv absolute top-0 left-0">
            <LazyLoadImage 
              src={featuredLeft1}
              alt="changing Image 1"
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              scrollPosition={scrollPosition}
              placeholderSrc={featuredLeftPlaceholder1Img}
              effect="blur"
            />
          </div>
          <div className="w-full h-full motiv absolute top-0 left-0">
            <LazyLoadImage 
              src={featuredLeft2}
              alt="changing Image 2"
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              scrollPosition={scrollPosition}
              placeholderSrc={featuredLeftPlaceholder2Img}
              effect="blur"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 relative">
          <LazyLoadImage 
            src={featuredMain2}
            alt="shifting image right"
            className="w-full h-full object-cover"
            width={"100%"}
            height={"100%"}
            scrollPosition={scrollPosition}
            placeholderSrc={featuredMainPlaceholder2Img}
            effect="blur"
          />
          <div className="w-full h-full motiv absolute top-0 left-0">
            <LazyLoadImage 
              src={featuredRight1}
              alt="changing Image 1 Right"
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              scrollPosition={scrollPosition}
              placeholderSrc={featuredRightPlaceholder1Img}
              effect="blur"
            />
          </div>
          <div className="w-full h-full motiv absolute top-0 left-0">
            <LazyLoadImage 
              src={featuredRight2}
              alt="changing Image 2 Right"
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              scrollPosition={scrollPosition}
              placeholderSrc={featuredRightPlaceholder2Img}
              effect="blur"
            />
          </div>
        </div>
      </div>
      <div  style={{height: height ? height : "100vh"}} className="w-full growUpTrigger bg-black"></div>
      <div  style={{height: height ? height * 1.3 : "130vh"}} className="w-full md:px-14 xl:px-28 px-1 relative bg-black flex parallaxTrigger lipsOpacityTrigger z-20 overflow-visible">
        <div  style={{height: height ? height : "100vh"}} className="w-1/2 flex justify-center z-10">
          <div className="overflow-hidden md:w-[85%] xl:w-[75%] w-[95%] h-[85%] translate-y-72 flex flex-col items-center moveDown2 rounded-[14px] sm:rounded-[20px] md:rounded-[40px] opacity-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <LazyLoadImage 
              src={lipsMain1}
              alt="lips to die for"
              className="object-cover object-center w-full h-full"
              width={"100%"}
              height={"100%"}
              scrollPosition={scrollPosition}
              placeholderSrc={lips1PlaceholderImg}
              effect="blur"
            />
          </div>
        </div>
        <div  style={{height: height ? height : "100vh"}} className="w-1/2 flex items-end justify-center z-10 relative">
          <div className="overflow-hidden md:w-[85%] xl:w-[75%] w-[95%] h-[85%] -translate-y-20 moveUp2 rounded-[14px] sm:rounded-[20px] md:rounded-[40px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <LazyLoadImage 
              src={lipsMain2}
              alt="lips to die for 2"
              className="object-cover w-full h-full"
              width={"100%"}
              height={"100%"}
              scrollPosition={scrollPosition}
              placeholderSrc={lips2PlaceholderImg}
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;
