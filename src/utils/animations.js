import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const noTriggerFromAnimations = (target, animationProps) => {
    gsap.from(target, {
        ...animationProps
    })
}

export const triggerFromAnimations = (target, animationProps, scrollProps) => {
    gsap.from(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps,
        }
    })
}

export const triggerToAnimations = (target, animationsProps, scrollProps) => {
    gsap.to(target, {
        ...animationsProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}

export const pinAnimations = (target, end) => {
    ScrollTrigger.create({
        trigger: target,
        start: "top top",
        end: `bottom ${end}`,
        pin: true,
    })
}