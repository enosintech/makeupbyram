import { useGSAP } from "@gsap/react";

import { triggerToAnimations } from "../utils/animations";

const WorkSectionComponent = (props) => {
   
    useGSAP(() => {
        triggerToAnimations(".creativeImageScale", {
            scale: 1,
            ease: "power1",
        }, {
            trigger: ".creativeImageScale",
            start: "top 85%",
            bottom: "bottom bottom",
            scrub: 5.5,
        })
        
        triggerToAnimations(".portraitImageScale", {
            scale: 1,
            ease: "power1",
        }, {
            trigger: ".portraitImageScale",
            start: "top 85%",
            end: "bottom bottom",
            scrub: 5.5,
        })  
    }, [])
    
  return (
    <div className="w-full h-full grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="overflow-hidden">
            <img className={`object-cover object-center w-full h-full scale-[2] ${props.id === "creative" ? "creativeImageScale" : "portraitImageScale"}`} alt="work Image1" src={props.image1} />
        </div>
        <div className="overflow-hidden">
            <img className={`object-cover object-center w-full h-full scale-[2] ${props.id === "creative" ? "creativeImageScale" : "portraitImageScale"}`} alt="work Image1" src={props.image2} />
        </div>
        <div className="overflow-hidden">
            <img className={`object-cover object-center w-full h-full scale-[2] ${props.id === "creative" ? "creativeImageScale" : "portraitImageScale"}`} alt="work Image1" src={props.image3} />
        </div>
        <div className="overflow-hidden">
            <img className={`object-cover object-center w-full h-full scale-[2] ${props.id === "creative" ? "creativeImageScale" : "portraitImageScale"}`} alt="work Image1" src={props.image4} />
        </div>
        <div className="overflow-hidden">
            <img className={`object-cover object-center w-full h-full scale-[2] ${props.id === "creative" ? "creativeImageScale" : "portraitImageScale"}`} alt="work Image1" src={props.image5} />
        </div>

        <div className="overflow-hidden">
            <img className={`object-cover object-center w-full h-full scale-[2] ${props.id === "creative" ? "creativeImageScale" : "portraitImageScale"}`} alt="work Image1" src={props.image6} />
        </div>
    </div>
  )
}

export default WorkSectionComponent;
