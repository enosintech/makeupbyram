import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const noTriggerFromAnimations = (target, animationProps) => {
    gsap.from(target, {
        ...animationProps,
    })
};

export const noTriggerToAnimations = (target, animationProps) => {
    gsap.to(target, {
        ...animationProps
    })
};

export const triggerFromAnimations = (target, animationProps, scrollProps) => {
    gsap.from(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps,
        }
    })
};

export const triggerToAnimations = (target, animationsProps, scrollProps) => {
    gsap.to(target, {
        ...animationsProps,
        scrollTrigger: {
            ...scrollProps,
        }
    })
};

export const pinAnimations = (target, start = "clamp(top top)", end, pinSpacing = true, markers = false) => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        end: end,
        pin: true,
        anticipatePin: 1,
        markers: markers,
        pinSpacing: pinSpacing,
    })
};