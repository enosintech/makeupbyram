import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

ScrollTrigger.config({
    ignoreMobileResize: false
})

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
            invalidateOnRefresh: true
        }
    })
}

export const triggerToAnimations = (target, animationsProps, scrollProps) => {
    gsap.to(target, {
        ...animationsProps,
        scrollTrigger: {
            ...scrollProps,
            invalidateOnRefresh: true
        }
    })
}

export const pinAnimations = (target, startSide = "top", start = "top", endSide = "bottom", end = "0", pin = true) => {
    ScrollTrigger.create({
        trigger: target,
        start: `clamp(${startSide} ${start})`,
        end: `clamp(${endSide} ${end})`,
        pin: pin,
        anticipatePin: 2,
        invalidateOnRefresh: true,
        // pinReparent: true
    })
}