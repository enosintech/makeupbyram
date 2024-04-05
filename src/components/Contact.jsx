import Lottie from "lottie-react";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";

import { heroVideo, scrollDown, aboutRam } from "../lib";
import { pinAnimations, triggerToAnimations } from "../utils/animations";

import Clock from "./Clock";
import ScrollPrompt from "./ScrollPrompt";

const Contact = () => {

    const lenis = useLenis();

    const handleHireClick = () => {
        lenis.scrollTo(".contactTrigger", {
            duration: 1,
            offset: window.innerHeight,
        })
    }

    useGSAP(() => {

        pinAnimations(".contactPin");

        pinAnimations(".lastPin", "top", "top", "bottom", "-100%");

        triggerToAnimations(".word", {
            color: "white",
            stagger: 0.5
        }, {
            trigger: ".whiteScrubTrigger",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        })

        triggerToAnimations(".bringRam", {
            opacity: 1,
            y: -110,
            ease: 'power1',
            duration: 0.5
        }, {
            trigger: ".whiteScrubTrigger",
            start: "top bottom",
            toggleActions: "play none none reverse"
        })
        
    }, [])

  return (
    <section className="w-full h-[300vh] flex flex-col relative z-10">
        <div className="w-full h-[100vh] bg-black flex items-center contactPin justify-center relative z-[5] px-20">
            <img className="w-[200px] z-[-1] rounded-[16px] h-[250px] opacity-0 bringRam object-cover absolute left-0 right-0 mx-auto top-40" alt="rams face" src={aboutRam}/>
            <p className="text-3xl md:text-5xl lg:text-6xl md:translate-y-32 translate-y-10 font-nohemiSemiBold max-w-[750px] text-center text-purple-950">Hey, it's Ram, <span className="">the makeup artist. {" "}</span>
                <span className="text-neutral-900"><span className="word"> I'm </span> <span className="word">all </span> <span className="word">about</span> <span className="word">quality</span> <span className="word">and</span> <span className="word">the</span> <span className="word">perfect</span> <span className="word">blend.</span> <span className="word">Each</span> <span className="word">face</span> <span className="word">is</span> <span className="word">a</span> <span className="word">canvas,</span> <span className="word">and</span> <span className="word">I</span> <span className="word">dive</span> <span className="word">in</span> <span className="word">with</span> <span className="word">a</span> <span className="word">certain</span> <span className="word">passion</span> <span className="word">and</span> <span className="word">precision.</span></span>
            </p>
            <div className="absolute bottom-5 right-5 flex items-center gap-2 hireButton" onClick={handleHireClick}>
                <Lottie animationData={scrollDown} loop={true} className="size-10"/>
                <p className="text-white text-2xl font-nohemiLight hover:text-purple-900 transition-all">HIRE ME</p>
            </div>
        </div>
        <div className="w-full h-[100vh] lastPin flex items-center justify-center relative whiteScrubTrigger">
            <ScrollPrompt rotate={180} target={".homescreen"}/>
            <Clock />
            <div className="w-[40%] h-full flex flex-col items-center justify-between py-40 md:py-10 contactTrigger">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-nohemiBlack text-white">MAKEUPBY<span className="text-purple-950">RAM</span></h1>
                <div className="flex flex-col items-center text-white gap-5">
                    <p className="font-nohemiExtraLight text-center text-2xl sm:text-3xl md:text-4xl max-w-[500px]">Schedule a Call</p>
                    <button className="p-6 w-[250px] md:w-[300px] flex items-center justify-center rounded-full bg-purple-950 group hover:bg-white transition-all">
                        <p className="font-nohemiRegular text-4xl md:text-5xl group-hover:text-black transition-all">Let's Talk</p>
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-center text-white">
                    <div className="p-2 border-2 border-white rounded-full w-fit"><p className="font-nohemiLight">projects.ramsha@gmail.com</p></div>
                    <div className="flex justify-center item-center gap-4 font-nohemiSemiBold">
                        <p className="hover:text-purple-600 active:text-purple-950 cursor-pointer select-none transition-all"><a href="" target="_blank">INSTAGRAM</a></p>
                        <p className="hover:text-purple-600 active:text-purple-950 cursor-pointer select-none transition-all"><a href="" target="_blank">WHATSAPP</a></p>
                    </div>
                </div>
            </div>
            <video key={heroVideo} className="w-full h-full object-cover absolute z-[-1]" autoPlay={true} loop={true} muted={true} playsInline={true} controls={false}>
                <source src={heroVideo} type="video/mp4"/>
            </video>
        </div>
    </section>
  )
}

export default Contact;
