import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Clock from "./Clock";
import ScrollPrompt from "./ScrollPrompt";
import VideoBackground from "./VideoBackground";
import { pinAnimations } from "../utils/animations";

const Hero = () => {

    const [ animPlaying, setAnimPlaying ] = useState(true);

    const lenis = useLenis(() => {
        if(animPlaying === true) {
            lenis.stop();
            lenis.scrollTo(".homescreen", { immediate: true, force: true,})
        } else {
            lenis.start()
        }
    }, [animPlaying]);

    useGSAP(() => {

        pinAnimations(".heroPin")

        const tl = gsap.timeline({
            onStart: () => {
                setAnimPlaying(true)
            },
            onComplete: () => {
                setAnimPlaying(false)
            }
        })

        tl.from("#heroVid", {
            width: "40%",
            height: "40%",
            borderRadius: 30,
            ease: "power2.Out",
            duration: 2,
            delay: 3,
        })

        tl.to("#loadAppear", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
        }, ">1")
    }, [])

  return (
    <section className="w-full h-[100dvh] homescreen overflow-x-hidden">
        <div className="w-full h-full heroPin flex items-center justify-center">
            <VideoBackground />
            <div className="w-full h-full pt-[52px] sm:pt-[100px] md:pt-[130px] lg:pt-[150px] xl:pt-[170px] 2xl:pt-[210px]">
                <div id="loadAppear" className="w-full h-full pl-2 sm:pl-5 pt-0 opacity-0">
                    <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-nohemiLight">A MAKEUP ARTIST BASED IN KUALA LUMPUR</p>
                    <ScrollPrompt id={"noclick"}/>
                    <Clock />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
