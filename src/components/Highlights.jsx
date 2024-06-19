import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";

import { pinAnimations, triggerToAnimations } from "../utils/animations";

import { highlightImage1, highlightImage2, highlightImage4, runwayImage2, scrollDown } from "../lib";

const Highlights = () => {

    const highlight = useRef(null);

    useGSAP(() => {

        ScrollTrigger.create({
            trigger: highlight.current,
            start: "top top",
            end: () => "+=" + highlight.current.offsetHeight * 2,
            pin: true,
            invalidateOnRefresh: true
        })

        triggerToAnimations(".moveLeft", {
            x: window.innerWidth < 768 ? "-75%" : "-50%",
            ease: "power1",
        }, {
            trigger: "#moveLeftTrigger",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        })

        triggerToAnimations(".scl", {
            scale: 1,
            ease: "power1",
        }, {
            trigger: ".scl",
            start: "top bottom",
            end: "bottom -20%",
            scrub: 5.5
        })

    }, [])

  return (
    <section id="moveLeftTrigger" className="w-full h-[300svh] bg-white relative z-20 text-white">
        <div ref={highlight} className="w-full h-[33.34%] overflow-hidden highlightPin relative">
            <div className="absolute top-4 sm:top-3 left-3 sm:left-5 flex flex-row-reverse items-center gap-x-2 z-10">
                <Lottie animationData={scrollDown} className="size-8 sm:size-10" />
                <p className="font-nohemiMedium sm:text-xl">SCROLL DOWN</p>
            </div>
            <p className="font-nohemiSemiBold sm:text-xl absolute top-5 right-2 sm:right-5 z-10">WHAT I OFFER</p>
            <div className="md:w-[200vw] w-[400vw] md:min-w-[200vw] min-w-[400vw] h-full flex gap-x-1 py-1 moveLeft">
                <div className="w-1/4 h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover scale-[2] scl" alt="creative Cover" src={highlightImage1} />
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>CREATIVE EDITORIAL</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover object-left md:object-center scale-[2] scl" alt="shoot Cover" src={highlightImage2} />
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>PHOTOSHOOT/ VIDEO</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover scale-[2] scl" alt="runway Cover" src={runwayImage2} />
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>RUNWAY</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full overflow-hidden relative">
                    <img className="w-full h-full object-cover scale-[2] scl" alt="highlight Cover" src={highlightImage4} />
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>MASTERCLASS</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights;
