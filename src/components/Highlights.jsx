import { useGSAP } from "@gsap/react";

import { pinAnimations, triggerToAnimations } from "../utils/animations";

import { highlightImage1, highlightImage2, highlightImage4, runwayImage2 } from "../lib";

const Highlights = () => {

    useGSAP(() => {
        pinAnimations(".highlightPin", "top" , "top", "bottom", "-100%");

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
        <div className="w-full h-[100svh] overflow-hidden highlightPin relative">
            <p className="font-nohemiSemiBold text-xl absolute top-5 left-5 z-10">WHAT I OFFER</p>
            <div className="md:w-[200vw] w-[400vw] md:min-w-[200vw] min-w-[400vw] h-full flex gap-x-1 py-1 moveLeft">
                <div className="w-1/4 h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover scale-[2] scl" alt="creative Cover" src={highlightImage1} />
                    <div className="absolute bottom-10 left-5 flex flex-col text-4xl font-nohemiBold">
                        <p>CREATIVE EDITORIAL</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover object-left md:object-center scale-[2] scl" alt="shoot Cover" src={highlightImage2} />
                    <div className="absolute bottom-10 left-5 flex flex-col text-4xl font-nohemiBold">
                        <p>PHOTOSHOOT/ VIDEO</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover scale-[2] scl" alt="runway Cover" src={runwayImage2} />
                    <div className="absolute bottom-10 left-5 flex flex-col text-4xl font-nohemiBold">
                        <p>RUNWAY</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full overflow-hidden relative">
                    <img className="w-full h-full object-cover scale-[2] scl" alt="highlight Cover" src={highlightImage4} />
                    <div className="absolute bottom-10 left-5 flex flex-col text-4xl font-nohemiBold">
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
