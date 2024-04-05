import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lottie from "lottie-react";
import { useLenis } from "@studio-freight/react-lenis";

import { pinAnimations, triggerFromAnimations, triggerToAnimations } from "../utils/animations";
import WorkSectionComponent from "./WorkSectionComponent";
import { creativeMakeup, shootMakeup } from "../constants";
import { Lips, runwayImage1, runwayImage2, featuredLeft1, featuredLeft2, featuredMain1, featuredMain2, featuredRight1, featuredRight2, lipsMain1, lipsMain2, lipsMain3, lipsMain4 } from "../lib";

const Work = () => {
  
  const lenis = useLenis();

  const handleContactClick = () => {
    lenis.scrollTo(".contactTrigger", {
      duration: 3,
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
      opacity: 0,
      ease: "power1",
      duration: 0.3,
    }, {
      trigger: ".zeroTrigger",
      start: "top bottom",
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

    triggerToAnimations("#upFade", {
      opacity: 0,
      ease: "power1",
      duration: 0.3
    }, {
      trigger: ".oneTrigger",
      start: "top bottom",
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
      start: "top bottom",
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

    triggerFromAnimations(".growUp", {
      width: 0,
      height: 0,
      borderRadius: 9999,
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

    triggerToAnimations(".moveDown", {
      y: 100,
    }, {
      trigger: ".parallaxTrigger",
      start: "top bottom",
      end: "bottom top",
      scrub: 3.5
    })

    triggerToAnimations(".moveDown2", {
      y: -20,
    }, {
      trigger: ".parallaxTrigger",
      start: "top bottom",
      end: "bottom top",
      scrub: 3.5
    })

    triggerToAnimations(".moveUp", {
      y: 300,
    }, {
      trigger: ".parallaxTrigger",
      start: "top bottom",
      end: "bottom top",
      scrub: 3.5
    })

    triggerToAnimations(".moveUp2", {
      y: 200,
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

    pinAnimations(".pinHigh");

    pinAnimations(".pinTrigger", "top", "top", "bottom" , "bottom", ".pinText");

    pinAnimations(".finalPin", "bottom", "bottom", "bottom", "0");

    pinAnimations(".pinTrigger", "top", "top", "bottom", "bottom", ".pinDiv");

  }, [])

  return (
    <section className='w-full h-[720dvh] relative z-30 flex flex-col'>
      <div className="w-full h-[100vh] absolute top-0 left-0">
        <p className="pinText absolute top-5 left-5 text-white font-nohemiSemiBold text-3xl md:text-5xl opacity-0 z-20">SELECTED WORK</p>
        <div className="absolute w-full h-[6%] bg-white bottom-0 left-0 z-20 pinDiv flex items-center">
          <div className="w-full h-[85%] border-y-[3px] border-black flex items-center justify-between px-2 md:px-6">
            <div className="relative w-[300px] h-full flex items-center md:text-xl">
              <p className="font-nohemiSemiBold absolute toZero">CREATIVE EDITORIAL MAKEUP</p>
              <span className="absolute" id="upFade"><p className="font-nohemiSemiBold opacity-0 toOne1">RUNWAY MAKEUP</p></span>
              <span className="absolute" id="upFade2"><p className="font-nohemiSemiBold opacity-0 toOne2">MAKEUP PORTRAITS</p></span>
              <p className="font-nohemiSemiBold absolute opacity-0 toOne3">FEATURED</p>
            </div> 
            <span className="hireButton cursor-pointer group"><p className="group-hover:text-purple-900 transition-all group-active:text-purple-950 font-nohemiLight text-md sm:text-xl" onClick={handleContactClick}>HIRE ME</p></span>
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex relative pinTrigger gap-1 finalPin">
        <div className="w-full h-[160dvh] min-h-[160dvh] relative">
          <WorkSectionComponent {...creativeMakeup} />
        </div>
        <div className="w-full h-[100dvh] min-h-[100dvh] relative flex gap-1 zeroTrigger">
          <div className="w-1/2 h-full overflow-hidden">
              <img className="w-full h-full object-cover object-top scale-[2] runwayImageScale" alt="runway photo1" src={runwayImage1} />
          </div>    
          <div className="w-1/2 h-full overflow-hidden">
              <img className="w-full h-full object-cover object-center scale-[2] runwayImageScale" alt="runway photo2" src={runwayImage2} />
          </div> 
        </div>
        <div className="w-full h-[160dvh] min-h-[160dvh] relative oneTrigger z-10">
          <WorkSectionComponent {...shootMakeup} />
        </div>
      </div>
      <div className="w-full h-[100dvh] bg-white flex md:flex-row flex-col md:gap-x-1 gap-y-1 md:gap-y-0 pinHigh twoTrigger relative overflow-y-visible">
        <div className="w-full h-[100dvh] absolute z-20 bg-black text-white top-0 bottom-0 my-auto left-0 right-0 mx-auto growUp flex items-center justify-center">
          <Lottie animationData={Lips} loop={true} className="relative z-10"/>
          <div className="w-full h-1/2 absolute top-0 flex items-end justify-center">
            <p className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] md:translate-y-10 font-nohemiBold text-center opacity-0 toLife">LIPS TO</p>
          </div>
          <div className="w-full h-1/2 absolute bottom-0 flex items-start justify-center">
            <p className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] md:-translate-y-10 font-nohemiBold text-center opacity-0 toLife">DIE FOR</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 relative">
          <p className="absolute z-10 text-white font-nohemiBlack text-8xl bottom-5 text-center w-full">COLOR</p>
          <img className="w-full h-full object-cover" alt="main Shift" src={featuredMain1}/>
          <img className="w-full h-full absolute top-0 left-0 motiv object-cover" src={featuredLeft1} alt="changing image 1"/>
          <img className="w-full h-full absolute top-0 left-0 motiv object-cover" src={featuredLeft2} alt="changing image 2"/>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 relative">
          <p className="absolute z-10 text-white font-nohemiBlack text-8xl bottom-5 text-center w-full">STYLE</p>
          <img className="w-full h-full object-cover" alt="mainsideshit" src={featuredMain2}/>
          <img className="w-full h-full absolute top-0 left-0 motiv object-cover" src={featuredRight1} alt="changing image 1 Right"/>
          <img className="w-full h-full absolute top-0 left-0 motiv object-cover" src={featuredRight2} alt="changing image 2 Right"/>
        </div>
      </div>
      <div className="w-full h-[100dvh] growUpTrigger bg-black"></div>
      <div className="w-full h-[100dvh] relative bg-black flex parallaxTrigger lipsOpacityTrigger z-20 overflow-y-visible">
        <div className="w-[30%] h-full flex justify-end pr-20 z-10">
          <img className="sm:w-[90%] w-full h-[55%] translate-y-72  text-white flex flex-col items-center moveDown2 object-cover object-center" alt="lips" src={lipsMain1} />
        </div>
        <div className="w-[25%] h-full flex justify-start z-10">
          <img className="w-[80%] h-[55%] translate-y-56 object-cover moveDown object-center bg-white" alt="lips 1" src=""/>
        </div>
        <div className="w-[20%] h-full flex justify-start z-10">
          <img className="w-[80%] h-[40%] translate-y-32 object-cover moveUp" alt="lips 2" src={lipsMain3}/>
        </div>
        <div className="w-[25%] h-full flex items-end justify-start z-10">
          <img className="w-[75%] h-[58%] -translate-y-20 object-cover moveUp2" alt="lips 3" src={lipsMain4}/>
        </div>
        <div className="z-[6] absolute md:-bottom-14 xl:-bottom-20 bottom-0 2xl:left-20 left-5 lg:left-10 flex flex-col text-white font-nohemiExtraLight">
          <p className="lg:text-[12rem] md:text-[10rem] text-[5rem]">BOLDER</p>
        </div>
      </div>
    </section>
  )
}

export default Work;
