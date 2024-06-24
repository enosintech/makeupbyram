import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lottie from "lottie-react";
import gsap from "gsap";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { highlightImage1, highlightImage2, highlightImage4, highlightPlaceholderImage1, highlightPlaceholderImage2, highlightPlaceholderImage3, runway2PlaceholderImage, runwayImage2, scrollDown } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";

const Highlights = ({ scrollPosition }) => {

    const slider = useRef(null);

    useGSAP(() => {

        const images = gsap.utils.toArray(".scl");
        const panels = gsap.utils.toArray(".panel");

        let tl = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: slider.current,
                pin: true,
                scrub: 2,
                start: "clamp(top top)",
                end: () => "+=" + slider.current.offsetWidth,
                anticipatePin: 1,
            }
        })

        tl.to(panels, {
          xPercent: window.innerWidth < 768 ? -100 * (panels.length - 1) : -100 * (panels.length - 2) ,
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
    <div ref={slider} className="md:w-[200vw] w-[400vw] h-[100lvh] bg-white text-white md:min-w-[200vw] min-w-[400vw] flex gap-x-1 py-1 moveLeft relative z-50">
            <div className="w-[100vw] h-full absolute top-0 left-0 z-10">
            <div className="absolute top-4 sm:top-3 left-3 sm:left-5 flex flex-row-reverse items-center gap-x-2 z-10">
                <Lottie animationData={scrollDown} className="size-8 sm:size-10" />
                <p className="font-nohemiMedium sm:text-xl">SCROLL DOWN</p>
            </div>
            <p className="font-nohemiSemiBold sm:text-xl absolute top-5 right-2 sm:right-5 z-10">WHAT I OFFER</p>
        </div>
        <div className="w-1/4 h-full relative overflow-hidden panel">
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
        <div className="w-1/4 h-full relative overflow-hidden panel">
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
        <div className="w-1/4 h-full relative overflow-hidden panel">
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
        <div className="w-1/4 h-full overflow-hidden relative panel">
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
  )
}

export default Highlights;

