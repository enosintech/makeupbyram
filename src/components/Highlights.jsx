import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lottie from "lottie-react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { highlightImage1, highlightImage2, highlightImage4, highlightPlaceholderImage1, highlightPlaceholderImage2, highlightPlaceholderImage3, runway2PlaceholderImage, runwayImage2, scrollDown } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";

const Highlights = ({ scrollPosition, browserName }) => {

    const highlight = useRef(null);

    useGSAP(() => {

        ScrollTrigger.config({
            ignoreMobileResize: true
        })

        const images = gsap.utils.toArray(".scl");

        const tl = gsap.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: highlight.current,
            start: "clamp(top top)",
            end: "clamp(bottom -100%)",
            pin: true,
            scrub: true,
          }  
        })

        tl.to(".moveLeft", {
            x: window.innerWidth < 768 ? "-75%" : "-50%",
        })

        images.forEach((img) => (
            noTriggerToAnimations(img, {
                scale: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: img,
                    containerAnimation: tl,
                    scrub: 5.5,
                }
            })
        ))

    }, [])

  return (
    <section style={{height: browserName !== "Safari" || browserName !== "Chrome" ? window.innerHeight * 3 : "300lvh"}} className="w-full bg-white relative z-20 text-white overflow-x-hidden">
        <div ref={highlight} className="w-full h-[33.33%] overflow-hidden highlightPin relative">
            <div className="absolute top-4 sm:top-3 left-3 sm:left-5 flex flex-row-reverse items-center gap-x-2 z-10">
                <Lottie animationData={scrollDown} className="size-8 sm:size-10" />
                <p className="font-nohemiMedium sm:text-xl">SCROLL DOWN</p>
            </div>
            <p className="font-nohemiSemiBold sm:text-xl absolute top-5 right-2 sm:right-5 z-10">WHAT I OFFER</p>
            <div className="md:w-[200vw] w-[400vw] md:min-w-[200vw] min-w-[400vw] h-full flex gap-x-1 py-1 moveLeft">
                <div className="w-1/4 h-full relative overflow-hidden">
                    <div className="w-full h-full scale-[2] scl">
                        <LazyLoadImage 
                            alt="Creative Work Cover"
                            src={highlightImage1}
                            className="w-full h-full object-cover"
                            width={"100%"}
                            height={"100%"}
                            effect="blur"
                            placeholderSrc={highlightPlaceholderImage1}
                            scrollPosition={scrollPosition}
                        />
                    </div>
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>CREATIVE EDITORIAL</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full relative overflow-hidden">
                    <div className="w-full h-full scale-[2] scl">
                        <LazyLoadImage 
                            alt="Shoot Work Cover"
                            src={highlightImage2}
                            className="w-full h-full object-cover object-left md:object-center"
                            width={"100%"}
                            height={"100%"}
                            effect="blur"
                            placeholderSrc={highlightPlaceholderImage2}
                            scrollPosition={scrollPosition}
                        />
                    </div>
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>PHOTOSHOOT/ VIDEO</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full relative overflow-hidden">
                    <div className="w-full h-full scale-[2] scl">
                        <LazyLoadImage 
                            alt="Runway Work Cover"
                            src={runwayImage2}
                            className="w-full h-full object-cover"
                            width={"100%"}
                            height={"100%"}
                            effect="blur"
                            placeholderSrc={runway2PlaceholderImage}
                            scrollPosition={scrollPosition}
                        />
                    </div>
                    <div className="absolute bottom-10 left-3 sm:left-5 flex flex-col text-3xl sm:text-4xl font-nohemiBold">
                        <p>RUNWAY</p>
                        <p className="font-nohemiLight">MAKEUP</p>
                    </div>
                </div>
                <div className="w-1/4 h-full overflow-hidden relative">
                    <div className="w-full h-full scale-[2] scl">
                        <LazyLoadImage 
                            alt="Runway Work Cover"
                            src={highlightImage4}
                            className="w-full h-full object-cover"
                            width={"100%"}
                            height={"100%"}
                            effect="blur"
                            placeholderSrc={highlightPlaceholderImage3}
                            scrollPosition={scrollPosition}
                        />
                    </div>
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
