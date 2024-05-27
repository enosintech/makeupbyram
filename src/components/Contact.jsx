import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Back } from "gsap";

import { heroVideo } from "../lib";
import { pinAnimations, triggerToAnimations } from "../utils/animations";

import Clock from "./Clock";
import ScrollPrompt from "./ScrollPrompt";

const Contact = () => {

    const contactOverlayRef = useRef(null);
    const overlayOpenRef = useRef(null);
    const overlayCloseRef = useRef(null);
    
    const [ copied, setCopied ] = useState(false);

    const handleCopyText = () => {
        const copyText = document.getElementById("emailInput");

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 4000)
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

        triggerToAnimations("#aboutSlide", {
            xPercent: -50,
        }, {
            trigger: ".contactPin",
            start: "top top",
            end: "bottom top",
            scrub: true,
        })

        const tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})

        tl.paused(true);
        tl.to(contactOverlayRef?.current, {clipPath: 'circle(100%)'})

        overlayOpenRef?.current.addEventListener("click", () => {
            tl.play()
        })

        overlayCloseRef?.current.addEventListener("click", () => {
            tl.reverse(.3)
        })
        
    }, [])

  return (
    <section className="w-full h-[300vh] -mt-2 flex flex-col relative z-10">
        <div className="w-full h-[100vh] border-b-8 border-white bg-black contactPin relative z-[5] overflow-hidden">
            <div id="aboutSlide" className="w-[200vw] h-full flex">
                <div className="min-w-1/2 w-1/2 h-full bg-green-500"></div>
                <div className="min-w-1/2 w-1/2 h-full bg-yellow-500"></div>
            </div>
        </div>
        <div className="w-full h-[100vh] lastPin flex items-center justify-center relative whiteScrubTrigger">
            <div ref={contactOverlayRef} className="contactOverlay w-[100vw] h-[100vh] bg-white fixed z-50 left-0 top-0">
                <p ref={overlayCloseRef}>im still a work in progress. click me to close</p>
            </div>
            <ScrollPrompt rotate={180} target={".homescreen"}/>
            <Clock />
            <div className="w-[40%] h-full flex flex-col items-center justify-between py-40 md:py-10 contactTrigger">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-nohemiBlack text-white">MAKEUPBY<span className="text-purple-950">RAM</span></h1>
                <div className="flex flex-col items-center text-white gap-5">
                    <button ref={overlayOpenRef} className="p-6 w-[250px] md:w-[300px] flex items-center justify-center rounded-full bg-purple-950 group hover:bg-white transition-all">
                        <p className="font-nohemiSemiBold text-4xl md:text-5xl group-hover:text-black transition-all">Let's Talk</p>
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-center text-white">
                    <div className="border-2 border-white rounded-full w-fit h-fit flex items-center px-2">
                        <input readOnly={true} className="font-nohemiLight select-none outline-none w-[230px] py-2 bg-transparent" type="text" value="projects.ramsha@gmail.com"  id="emailInput" />
                        <button disabled={copied} onClick={handleCopyText} className={`font-nohemiBlack h-full text-[14px] hover:text-purple-800 active:text-purple-950 ${copied ? "text-purple-950" : ""}`}><p>{copied ? "COPIED" : "COPY"}</p></button>
                    </div>
                    <div className="flex justify-center item-center gap-4 font-nohemiSemiBold">
                        <p className="hover:text-purple-800 active:text-purple-950 cursor-pointer select-none transition-all"><a href="https://www.instagram.com/makeupby.ram/" target="_blank">INSTAGRAM</a></p>
                        <p className="hover:text-purple-800 active:text-purple-950 cursor-pointer select-none transition-all"><a href="" target="_blank">WHATSAPP</a></p>
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
