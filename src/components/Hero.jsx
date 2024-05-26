import { useGSAP } from "@gsap/react";

import { heroVideo } from "../lib";
import { noTriggerFromAnimations, pinAnimations } from "../utils/animations";

import Clock from "./Clock";
import ScrollPrompt from "./ScrollPrompt";

const Hero = () => {

    useGSAP(() => {
        pinAnimations(".heroPin");

        noTriggerFromAnimations("#heroVideo", {
            width: "40%",
            height: "40%",
            borderRadius: 16,
            ease: "power2.inOut",
            duration: 2,
            delay: 3,
        })

        noTriggerFromAnimations("#loadAppear", {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            delay: 6,
        })
    })

  return (
    <section className="w-full h-[100vh] homescreen">
        <div className="w-full h-[100vh] heroPin flex items-center justify-center">
            <video id="heroVideo" key={heroVideo} preload="none" className="w-full h-full object-cover absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto z-[-1]" autoPlay={true} playsInline={true} loop={true} muted={true} controls={false}>
                <source src={heroVideo} type="video/mp4"/>
            </video>
            <div className="w-full h-full pt-[40px] sm:pt-[60px] md:pt-[80px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[210px]">
                <div id="loadAppear" className="w-full h-full pl-6 pt-0">
                    <p className="text-3xl text-white font-nohemiLight">A MAKEUP STUDIO BASED IN KUALA LUMPUR</p>
                    <ScrollPrompt id={"noclick"}/>
                    <Clock />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
