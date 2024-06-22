import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import { heroPlaceImg, heroVideoMain } from "../lib";

import VidLoadingPrompt from "./VidLoadingPrompt";

const VideoBackground = () => {

  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      onEnter: () => {
        ref.current.play();
      }
    })
  }, [])

  return (
    <div id="heroVid" className="absolute w-full h-full z-[-1] top-0 bottom-0 left-0 right-0 mx-auto my-auto overflow-hidden">
        <div className="w-full h-full object-cover absolute top-0 left-0 z-[-1] grid place-items-center">
          <img className="w-full h-full object-cover absolute top-0 left-0 z-[-1]" src={heroPlaceImg} alt="video placeholder image"/>
          <VidLoadingPrompt />
        </div>
        <video ref={ref} key={heroVideoMain} className="absolute top-0 left-0 z-[1] w-full h-full object-cover bgVideo" loop={true} playsInline={true} muted={true}>
            <source src={heroVideoMain} type='video/mp4' />
        </video>
    </div>
  )
}

export default VideoBackground;

