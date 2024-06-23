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
        }
    })
}

export const triggerToAnimations = (target, animationsProps, scrollProps) => {
    gsap.to(target, {
        ...animationsProps,
        scrollTrigger: {
            ...scrollProps,
        }
    })
}

export const pinAnimations = (target, start = "top top", end, pinSpacing = false, pin = true) => {
    ScrollTrigger.create({
        trigger: target,
        start: `clamp(${start}})`,
        end: end,
        pin: pin,
        anticipatePin: 1,
        markers: true,
        pinSpacing: pinSpacing,
    })
}