import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const noTriggerFromAnimations = (target, animationProps) => {
    gsap.from(target, {
        ...animationProps,
    })
}

export const noTriggerToAnimations = (target, animationProps) => {
    gsap.to(target, {
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

export const pinAnimations = (target, startSide = "top", start = "top", endSide = "bottom", end = "0", pin = true) => {
    ScrollTrigger.create({
        trigger: target,
        start: `${startSide} ${start}`,
        end: `${endSide} ${end}`,
        pin: pin,
    })
}