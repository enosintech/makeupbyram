import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Back } from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons"

import { boldArrowImg, heroVideo } from "../lib";
import { pinAnimations, triggerToAnimations } from "../utils/animations";

import Clock from "./Clock";
import ScrollPrompt from "./ScrollPrompt";

const Contact = () => {

    const contactOverlayRef = useRef(null);
    const overlayOpenRef = useRef(null);
    const overlayCloseRef = useRef(null);

    const lenis = useLenis();
    
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
            xPercent: -25,
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
        <div className="w-full h-[100vh] border-b-8 border-white bg-black contactPin relative z-[60] overflow-hidden">
            <div id="aboutSlide" className="w-[150vw] h-full flex">
                <div className="min-w-[100vw] w-[100vw] h-full bg-black"></div>
                <div className="min-w-[50vw] w-[50vw] h-full bg-yellow-500"></div>
            </div>
        </div>
        <div className="w-full h-[100vh] lastPin flex items-center justify-center relative whiteScrubTrigger">
            <div ref={contactOverlayRef} className="contactOverlay w-[100vw] h-[100vh] fixed z-50 left-0 top-0 flex flex-col items-center justify-center gap-y-4">
                <div className="bg-slate-100 rounded-[20px] w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] h-[50%] flex flex-col relative items-center justify-end pb-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div ref={overlayCloseRef} className="clickable absolute top-3 sm:top-4 right-4 rounded-full bg-neutral-200 shadow w-10 h-10 flex items-center justify-center" onClick={() => {
                        lenis?.start();
                    }}>
                        <FontAwesomeIcon icon={faX}/>
                    </div>
                    <div className="absolute top-5 sm:top-7 left-5">
                        <p className="font-nohemiMedium text-xl">GET IN TOUCH</p>
                    </div>
                    <div className="rounded-[20px] w-[95%] h-[80%] bg-white flex flex-col overflow-hidden px-5">
                        <div className="w-full h-1/4 border-b-[0.5px] border-gray-300">
                            <input type="text" className="w-full h-full flex items-center placeholder:text-gray-300 font-nohemiRegular outline-none text-xl" placeholder="Your Name"/>
                        </div>
                        <div className="w-full h-1/4 border-b-[0.5px] border-gray-300">
                            <input type="email" className="w-full h-full flex items-center placeholder:text-gray-300 font-nohemiRegular outline-none text-xl" placeholder="Your Email"/>
                        </div>
                        <div className="w-full h-2/4 py-3">
                            <textarea className="w-full h-full text-justify resize-none placeholder:text-gray-300 font-nohemiLight outline-none text-xl" placeholder="Your Message"/>
                        </div>
                    </div>
                </div>
                <button className="hover:opacity-70 active:opacity-50 transition-all font-nohemiBold text-2xl text-white py-3 px-5 flex items-center justify-center rounded-full bg-purple-950 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <p>SUBMIT</p>
                </button>
            </div>
            <ScrollPrompt bottom={true} rotate={180} target={".homescreen"}/>
            <Clock bottom={true}/>
            <div className="w-[40%] h-full flex flex-col items-center justify-between pb-40 pt-14 md:py-10 contactTrigger">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-nohemiBlack text-white relative z-[51]">MAKEUPBY<span className="text-purple-950">RAM</span></h1>
                <div className="flex flex-col items-center text-white gap-5 overflow-x-hidden">
                    <button ref={overlayOpenRef} className="p-6 w-[250px] md:w-[300px] flex items-center justify-center rounded-full bg-purple-950 group hover:bg-white transition-all" onClick={() => {
                        lenis.scrollTo("end", {immediate: true, force: true})
                        lenis.stop();
                    }}>
                        <p className="font-nohemiSemiBold text-4xl md:text-5xl group-hover:text-black transition-all">Let's Talk</p>
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-center text-white">
                    <div className="border-2 border-white rounded-full w-fit h-fit flex items-center px-2 pr-3">
                        <input readOnly={true} className="font-nohemiLight select-none outline-none w-[230px] py-2 bg-transparent" type="text" value="projects.ramsha@gmail.com"  id="emailInput" />
                        <button disabled={copied} onClick={handleCopyText} className={`font-nohemiBlack h-full text-[14px] hover:text-purple-800 active:text-purple-950 translate-y-[1px] ${copied ? "text-purple-950" : ""}`}><p>{copied ? "COPIED" : "COPY"}</p></button>
                    </div>
                    <div className="flex justify-center item-center gap-4 font-nohemiSemiBold">
                        <p className="hover:text-purple-800 active:text-purple-950 cursor-pointer select-none transition-all flex items-center gap-x-2"><a href="https://www.instagram.com/makeupby.ram/" target="_blank" className="translate-y-[1px]">INSTAGRAM</a><img src={boldArrowImg} className="size-5 -rotate-45 invert"/></p>
                        <p className="hover:text-purple-800 active:text-purple-950 cursor-pointer select-none transition-all flex items-center gap-x-2"><a href="" target="_blank" className="translate-y-[1px]">WHATSAPP</a><img src={boldArrowImg} className="size-5 -rotate-45 invert"/></p>
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
