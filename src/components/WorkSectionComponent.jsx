import { useGSAP } from "@gsap/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        {props.creativeMakeup ? 
            props.creativeMakeup.map((items, i) => (
                <div key={items.id} index={i} className="overflow-hidden">
                    <div className="w-full h-full scale-[2] creativeImageScale">
                        <LazyLoadImage 
                            src={items.image}
                            alt="creative makeup Image"
                            className="w-full h-full object-cover object-center"
                            width={"100%"}
                            height={"100%"}
                            scrollPosition={props.scrollPosition}
                            placeholderSrc={items.placeholder}
                            effect="blur"
                        />
                    </div>
                </div>
            ))
        :
        props.shootMakeup ? 
            props.shootMakeup.map((items, i) => (
                <div key={items.id} index={i} className="overflow-hidden">
                    <div className="w-full h-full scale-[2] portraitImageScale">
                        <LazyLoadImage 
                            src={items.image}
                            alt="creative makeup Image"
                            className="w-full h-full object-cover object-center"
                            width={"100%"}
                            height={"100%"}
                            scrollPosition={props.scrollPosition}
                            placeholderSrc={items.placeholder}
                            effect="blur"
                        />
                    </div>
                </div>
            ))
        :
                <div>CHECK</div>
        }
        
    </div>
  )
}

export default WorkSectionComponent;
