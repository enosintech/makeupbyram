import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

import ScrollPrompt from "./ScrollPrompt";

import { aboutImage1, aboutImage2, aboutVideo, workedWithVideo } from "../lib";
import { pinAnimations, triggerToAnimations } from "../utils/animations";


const About = () => {

  const [ time, setTime ] = useState("3:37:43 PM");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Kuala_Lumpur"}))
    }, 1000)

    return () => clearInterval(interval);
  })

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

    pinAnimations(".aboutPin");

    pinAnimations(".workedWithPin", "top", "top", "bottom", "-200%");

  }, [])

  return (
    <>
      <section id="aboutAnimateTrigger" className="w-full h-[400vh] flex flex-col">
          <div className="w-full h-[100vh] relative bg-white flex flex-col py-1 aboutPin z-20">
            <div className="w-full h-[15%] absolute top-0 z-10 text-white flex items-center justify-between px-5">
              <span className="p-2 w-fit h-fit rounded-full border-[6px] border-white"><p className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-nohemiLight">ESTABLISHED 2022</p></span>
              <div className="w-28"></div>
              <div className="text-right absolute right-3 lg:right-6">
                <p className="text-2xl lg:text-4xl xl:text-5xl w-[300px] font-nohemiExtraLight">{time}</p>
              </div>
            </div>
            <div className="w-full h-full flex flex-col-reverse lg:flex-row-reverse gap-1 lg:gap-0">
              <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col justify-center gap-1">
                <div className="w-full h-1/2 relative">
                  <div className="w-full h-full absolute bottom-0 right-0 enlarge flex justify-center gap-2">
                    <div className="w-full h-full overflow-hidden"><img className="w-full h-full object-cover object-center scale-[2] g_down" alt="aboutImage1" src={aboutImage1}/></div>
                  </div>
                </div>
                <div className="w-full h-1/2 relative">
                  <div className="w-full h-full absolute bottom-0 right-0 enlarge overflow-hidden">
                    <img className="w-full h-full object-cover scale-[2] g_down" alt="about Image 2" src={aboutImage2}/>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:h-full  h-1/2 relative">
                <div className="lg:w-[99.5%] w-full h-full absolute bottom-0 left-0 enlarge2 overflow-hidden">
                  <video key={aboutVideo} className="w-full h-full object-cover" autoPlay={true} loop={true} muted={true} controls={false} playsInline={true}>
                    <source src={aboutVideo} type="video/mp4"/>
                  </video>
                  <div className="flex flex-col min-w-[200px] max-w-[700px] absolute bottom-3 text-white left-5 justify-center gap-3 text-[38px] xl:text-7xl font-nohemiBlack">
                    <p className="w-fit">A MOBILE MAKEUP STUDIO BASED IN KUALA LUMPUR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workedWithPin w-full h-[100vh] text-white relative z-10 flex flex-col items-center justify-center">
            <ScrollPrompt />
            <video key={workedWithVideo} className="w-full h-full object-cover absolute z-[-1]" autoPlay={true} loop={true} muted={true} playsInline={true} controls={false}>
              <source src={workedWithVideo} type="video/mp4"/>
            </video>
            <div className="w-full h-1/2 flex items-center justify-center">
              <div className="flex flex-col justify-center gap-3 text-[12px] sm:text-xl md:text-3xl lg:text-4xl xl:text-[5xl]">
                <div className="flex justify-center gap-2 md:gap3">
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Party</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Shoot</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Lifestyle</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Creative</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Runway</p>
                  </span>
                </div>
                <div className="flex justify-center gap-2 md:gap-3">
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Edgy</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Expressive</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Free</p>
                  </span>
                  <span className="rounded-full border border-white p-2 md:p-3 lg:p-5 flex items-center justify-center">
                    <p className="font-nohemiSemiBold">Brave</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 flex justify-end">
              <div className="w-1/2 h-full flex flex-col items-end justify-end pb-10 pr-3 md:pr-6 lg:pr-10">
                <p className="font-nohemiExtraLight text-lg md:text-2xl">WORKED WITH</p>
                <div className="flex flex-col gap-1 items-end text-3xl sm:text-5xl md:text-6xl font-nohemiSemiBold">
                  <p className="mt-5 font-nohemiLight -translate-x-40 opacity-0 stackIn">ruffspur</p>
                  <p className="-translate-x-40 opacity-0 stackIn"><span className="font-nohemiLight">roberto</span>Carvalli</p>
                  <p className="-translate-x-40 opacity-0 stackIn"><span className="font-nohemiLight">makeup</span>Miracle</p>
                  <p className="-translate-x-40 opacity-0 stackIn"><span className="font-nohemiLight">polydextrous</span>Studios</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default About;
