import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { noTriggerToAnimations } from "../utils/animations";

const isTouchDevice = 'ontouchstart' in window;

const CursorComponent = () => {
    useGSAP(() => {

        if (isTouchDevice) {
            return;
        }

        gsap.set(".cursor", {xPercent: -50, yPercent: -50})
        gsap.set('.hireMeCursor', {xPercent: -50, yPercent: -50})
        
        let targets = gsap.utils.toArray(".cursor");
        
        window.addEventListener("mousemove", (e) => {
            
            const { target } = e;

            const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button') || target?.closest('.clickable') || target?.closest('.trick') || target?.closest(".hireButton");

            noTriggerToAnimations(targets, {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY,
                opacity: isTargetLinkOrBtn ? 0.4 : 1,
                transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
                ease: "power4",
                overwrite: "auto",
                stagger: 0.2
            });
        });

        document.addEventListener('mouseleave', () => {
            noTriggerToAnimations(".cursor", {
              duration: 0.7,
              opacity: 0,
              ease: "power4",
            });
        });
    }, [])

  return (
    <>
        <div className="cursor mouse w-6 h-6 bg-purple-950 fixed top-0 left-0 rounded-full z-[10000] opacity-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
        <div className="cursor w-6 h-6 bg-purple-200 fixed top-0 left-0 rounded-full z-[10000] opacity-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
    </>
  )
}

export default CursorComponent;
