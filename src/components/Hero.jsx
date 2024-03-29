import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { heroVideo, scrollArrow } from "../lib";

const Hero = () => {
    
    const videoRef = useRef(null);
    
    const [ time, setTime ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Kuala_Lumpur"}))
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".heroPin",
            start: "top top",
            end: "bottom 0",
            pin: true,
        })

        gsap.from("#heroVideo", {
            width: "40%",
            height: "40%",
            borderRadius: 16,
            ease: "power2.inOut",
            duration: 2,
            delay: 3,
        })

        gsap.from("#loadAppear", {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            delay: 6,
        })
    })

  return (
    <section className="w-full h-[100vh]">
        <div className="w-full h-full relative heroPin flex items-center justify-center">
            <video id="heroVideo" key={heroVideo} ref={videoRef} preload="none" className="w-full h-full object-cover absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto z-[-1]" autoPlay={true} playsInline={true} loop={true} muted={true} controls={false}>
                <source src={heroVideo} type="video/mp4"/>
            </video>
            <div className="w-full h-full pt-[90px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[180px]">
                <div id="loadAppear" className="w-full h-full relative pl-5 pt-5">
                    <div className="flex flex-col text-white text-3xl sm:text-5xl font-nohemiLight">
                        <p>Style. Kuala Lumpur. Ready.</p>
                        <p>Bold. <span className="text-purple-950">Purple.</span> Friends. Livid.</p>
                        <p>Color. Expression.</p>
                        <p>Karachi.</p>
                    </div>
                    <div className="absolute bottom-10 rounded-full w-[80px] h-[80px] bg-gray-700 left-10 flex items-center justify-center">
                        <img className="size-10 invert rotate-90" alt="arrow" src={scrollArrow}/>
                    </div>
                    <div className="absolute bottom-10 right-5 sm:right-7 lg:right-10 xl:right-14 flex flex-col items-end gap-3 text-white text-lg">
                        <p className="font-nohemiBold">LOCAL TIME</p>
                        <p className="font-nohemiLight">{time} KUL</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
