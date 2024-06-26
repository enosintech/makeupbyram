import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Back } from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLenis } from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react"
import 'react-lazy-load-image-component/src/effects/blur.css';

import { aboutAdImage, aboutAdPlaceholderImg, aboutAdVideo, aboutAdVideo4, aboutRam, aboutRamPlaceholderImg, aboutRamScroll, boldArrowImg, heroVideoMain, workVideoMain } from "../lib";
import { pinAnimations, triggerToAnimations } from "../utils/animations";

import Clock from "./Clock";
import ScrollPrompt from "./ScrollPrompt";
import VideoBackground from "./VideoBackground";

const Contact = ({ scrollPosition }) => {

    const contactRef = useRef(null);
    const lastPinRef = useRef(null);
    const contactOverlayRef = useRef(null);
    const overlayOpenRef = useRef(null);
    const overlayCloseRef = useRef(null);
    
    const [ overLayOpen, setOverlayOpen ] = useState(false)
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ submitValue, setSubmitValue ] = useState("SEND MESSAGE");
    const [ copied, setCopied ] = useState(false);
    const [ formData, setFormData ] = useState({
        email: "",
        subject: "",
        message: "",
    })

    const lenis = useLenis(() => {
        if(overLayOpen) {
            lenis.scrollTo(ScrollTrigger.maxScroll(window), {immediate: true, force: true})
            lenis.stop();
        } else {
            lenis.start();
        }

    }, [overLayOpen]);

    const handleCopyText = () => {
        const copyText = document.getElementById("emailInput");

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 4000)
    }

    const emailForm = {
        email: formData.email,
        subject: formData.subject,
        message: formData.message
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        if(formData.email === ""){
            setLoading(false)
            setError("Email is Required")
            setTimeout(() => {
                setError(false)
            }, 3000)
            return;
        }

        if(formData.subject === ""){
            setLoading(false)
            setError("Subject is Required")
            setTimeout(() => {
                setError(false)
            }, 3000)
            return;
        }

        if(formData.message === ""){
            setLoading(false)
            setError("Message is Required")
            setTimeout(() => {
                setError(false)
            }, 3000)
            return;
        }

        await fetch(import.meta.env.VITE_API_LINK, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(emailForm)
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === false){
                setLoading(false)
                setError(data.message)
            } else {
                setLoading(false)
                setSubmitValue("SUBMITTED")
                setFormData({
                    email: "",
                    subject: "",
                    message: ""
                });
                setTimeout(() => {
                    setSubmitValue("SEND MESSAGE")
                }, 3000);
            }
        })        
    }

    useGSAP(() => {

        pinAnimations(contactRef.current, "top top", () => "+=" + contactRef.current.offsetHeight, false);

        pinAnimations(lastPinRef.current, "top top", () => "+=" + lastPinRef.current.offsetHeight * 2, false);

        triggerToAnimations("#slideAboutMe", {
            width: "100%",
        }, {
            trigger: ".lastPin", 
            start: "clamp(top bottom)",
            end: "clamp(top top)",
            scrub: true,
        })

        const tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})

        tl.paused(true);
        tl.to(contactOverlayRef?.current, {clipPath: 'circle(100%)'})

        overlayOpenRef?.current.addEventListener("click", () => {
            tl.play()
            setOverlayOpen(true)
        })

        overlayCloseRef?.current.addEventListener("click", () => {
            tl.reverse(.3)
            setOverlayOpen(false)
        })

        const imgs = gsap.utils.toArray(".aboutAnimVid");
        const fade = 0.8;

        gsap.set(imgs[0], {autoAlpha: 1})

        const crossFade = () => {
            gsap.timeline()
            .to(imgs[0], {autoAlpha: 0, duration: fade})
            .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)

            imgs.push(imgs.shift())

            gsap.delayedCall(2, crossFade);
        }
        
        gsap.delayedCall(0, crossFade);

    }, [])

  return (
    <section className="w-full h-[300lvh] bg-black -mt-2 flex flex-col relative z-10 overflow-x-hidden">
        <div ref={contactRef}  className="w-full h-[100lvh] border-b-8 border-white bg-black contactPin relative z-[60] overflow-hidden">
            <div className="w-[100vw] h-full flex lg:flex-row flex-col">
                <div className="lg:w-[60%] w-full lg:h-full h-[40%] flex items-center justify-center">
                    <div className="lg:w-[90%] sm:w-[50%] w-[70%] h-[90%] lg:translate-y-0 translate-y-14 overflow-hidden rounded-[20px] md:rounded-[30px] relative lg:rounded-[60px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <div className="w-full h-full absolute z-[2] aboutAnimVid overflow-hidden">
                            <video key={aboutAdVideo4} className="w-full h-full object-cover" autoPlay={true} loop={true} controls={false} muted={true} playsInline={true}>
                                <source src={aboutAdVideo4} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full h-full absolute z-[3] aboutAnimVid overflow-hidden">
                            <video key={workVideoMain} className="w-full h-full object-cover" autoPlay={true} loop={true} controls={false} muted={true} playsInline={true}>
                                <source src={workVideoMain} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full h-full absolute z-[4] aboutAnimVid overflow-hidden">
                            <video key={aboutAdVideo} className="w-full h-full object-cover" autoPlay={true} loop={true} controls={false} muted={true} playsInline={true}>
                                <source src={aboutAdVideo} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="w-full h-full absolute z-[1] aboutAnimVid overflow-hidden">
                            <LazyLoadImage
                                alt="ram working"
                                src={aboutAdImage}
                                className="w-full h-full object-cover"
                                width={"100%"}
                                height={"100%"}
                                effect="blur"
                                placeholderSrc={aboutAdPlaceholderImg}
                                scrollPosition={scrollPosition}
                            />
                        </div>
                        <div className="w-full h-full absolute z-[5] aboutAnimVid overflow-hidden">
                            <video key={heroVideoMain} className="w-full h-full object-cover" autoPlay={true} loop={true} controls={false} muted={true} playsInline={true}>
                                <source src={heroVideoMain} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex flex-col absolute bottom-5 lg:bottom-10 left-5 lg:left-10 z-10 text-white">
                            <p className="lg:text-5xl sm:text-4xl text-3xl font-nohemiBold tracking-tight">RAM AT WORK</p>
                            <p className="font-nohemiLight tracking-tight">22' — Present</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[40%] w-full lg:h-full h-[60%] flex flex-col relative">
                    <div className="w-full h-[15%] flex items-center justify-end">
                        <div className="w-fit h-fit relative text-white p-3 flex items-center lg:translate-y-0 translate-y-20">
                            <div id="slideAboutMe" className="absolute w-0 h-full bg-purple-950 right-0"></div>
                            <p className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-nohemiSemiBold relative z-10 lg:translate-y-1">ABOUT ME</p>
                        </div>
                    </div>
                    <div className="w-full h-[85%] flex lg:flex-col flex-row">
                        <div className="lg:w-full w-1/2 lg:h-[55%] h-full hidden md:flex items-center justify-center relative">
                            <div className="overflow-hidden 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[50%] sm:w-[70%] w-[80%] h-[60%] sm:h-[75%] md:h-[65%] lg:h-[85%] rounded-[30px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                                <LazyLoadImage
                                    alt="picture of ramsha"
                                    src={aboutRam}
                                    className="w-full h-full object-cover"
                                    width={"100%"}
                                    height={"100%"}
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    placeholderSrc={aboutRamPlaceholderImg}
                                />
                            </div>
                            <p className="absolute bottom-5 lg:-bottom-2 text-white font-black tracking-tight text-xl">Ramsha</p>
                        </div>
                        <div className="lg:w-full md:w-1/2 lg:h-[45%] w-full h-full flex lg:items-start items-center justify-center px-10 sm:px-36 md:px-14 xl:px-32 lg:pt-5">
                            <p className="text-[14px] text-justify tracking-tight font-light text-white">From comtemporary photoshoots to mainstream runway fashion projects, I am always looking for exciting opportunities to collaborate with artists of diverse disciplines and backgrounds. My arsenal is versatile and with it I am able to create a range of aesthetic looks that never compromise your vision.</p>
                        </div>
                    </div>
                    <Lottie animationData={aboutRamScroll} className="size-14 sm:size-24 md:size-28 lg:size-32 absolute sm:right-4 right-2 md:right-7 bottom-5"/>
                </div>
            </div>
        </div>
        <div ref={lastPinRef} className="w-full h-[100lvh] lastPin flex items-center justify-center relative whiteScrubTrigger sm:border-none border-b-4 border-white">
            <div ref={contactOverlayRef} className="contactOverlay w-[100vw] h-[100lvh] fixed z-50 left-0 top-0 flex flex-col items-center justify-center gap-y-4">
                <div className="bg-slate-900 rounded-[30px] w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] h-[50%] flex flex-col relative items-center justify-end pb-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="w-full h-fit absolute top-3 sm:top-4 flex flex-row-reverse items-center justify-between px-5">
                        <div ref={overlayCloseRef} className="clickable rounded-full bg-slate-700 shadow w-10 h-10 flex items-center justify-center hover:opacity-75 active:opacity-50">
                            <FontAwesomeIcon icon={faX} color="white"/>
                        </div>
                        {error && 
                            <div className="w-fit h-fit max-w-[40%] bg-white shadow rounded-full p-3 px-4">
                                <p className="font-nohemiRegular text-red-700 text-[12px]">{error}</p>
                            </div>
                        }
                        <a href="https://www.instagram.com/makeupby.ram/" target={"_blank"} className="clickable rounded-full bg-slate-700 shadow w-10 h-10 flex items-center justify-center hover:opacity-75 active:opacity-50">
                            <FontAwesomeIcon size="xl" icon={faInstagram} color="white"/>
                        </a>
                    </div>
                    <div className="rounded-[20px] w-[95%] h-[80%] flex flex-col overflow-hidden px-2 sm:px-5">
                        <div className="w-full h-1/4 rounded-full bg-slate-500 px-4">
                            <input type="email" value={formData.email} className="w-full h-full bg-transparent flex items-center text-white placeholder:text-white font-nohemiBold outline-none text-xl" placeholder="Your Email" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }}/>
                        </div>
                        <div className="w-full h-1/4 rounded-full bg-slate-500 px-4 mt-2">
                            <input type="text" value={formData.subject} className="w-full h-full bg-transparent flex items-center text-white placeholder:text-white font-nohemiBold outline-none text-xl" placeholder="Subject" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    subject: e.target.value
                                })
                            }}/>
                        </div>
                        <div className="w-full h-2/4 py-3 rounded-[30px] bg-slate-500 px-4 mt-2">
                            <textarea value={formData.message} className="w-full h-full text-justify resize-none bg-transparent text-white placeholder:text-white font-nohemiLight outline-none text-xl" placeholder="Message" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }}/>
                        </div>
                    </div>
                </div>
                <button disabled={loading ? true : submitValue === "SUBMITTED" ? true : false} onClick={handleFormSubmit} className={`${loading || submitValue === "SUBMITTED" ? "opacity-30 hover:opacity-30 active:opacity-30" : "opacity-100 hover:opacity-70 active:opacity-50"} transition-all font-nohemiBold text-2xl text-white py-3 px-5 flex items-center justify-center rounded-full bg-purple-950 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}>
                    <p>{loading ? "SENDING" : submitValue }</p>
                </button>
                <p className="absolute bottom-3 text-white font-nohemiRegular tracking-tight text-lg">© {new Date().getFullYear()} MAKEUPBYRAM</p>
            </div>
            <ScrollPrompt bottom={true} rotate={180} target={".homescreen"}/>
            <Clock bottom={true}/>
            <div className="w-[40%] h-full flex flex-col items-center justify-between pb-40 pt-14 md:py-10 contactTrigger">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-nohemiBlack text-white relative z-[51]">MAKEUPBY<span className="text-purple-950">RAM</span></h1>
                <div className="text-white overflow-x-hidden rounded-full">
                    <button ref={overlayOpenRef} className="p-6 w-[250px] md:w-[300px] flex items-center justify-center rounded-full overflow-hidden bg-purple-950 group hover:bg-white transition-all shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <p className="font-nohemiSemiBold text-4xl md:text-5xl group-hover:text-black transition-all">Reach Out</p>
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-center text-white">
                    <div className="border-2 border-white rounded-full w-fit h-fit flex items-center px-2 pr-3">
                        <input readOnly={true} className="font-nohemiLight select-none outline-none w-[230px] py-2 bg-transparent" type="text" value="inquiries@makeupbyram.com"  id="emailInput" />
                        <button disabled={copied} onClick={handleCopyText} className={`font-nohemiBlack h-full text-[14px] hover:text-purple-800 active:text-purple-950 translate-y-[1px] ${copied ? "text-purple-950" : ""}`}><p>{copied ? "COPIED" : "COPY"}</p></button>
                    </div>
                    <div className="flex justify-center item-center gap-4 font-nohemiSemiBold">
                        <p className="hover:text-purple-800 active:text-purple-950 cursor-pointer select-none transition-all flex items-center gap-x-2"><a href="https://www.instagram.com/makeupby.ram/" target="_blank" className="translate-y-[1px]">INSTAGRAM</a><img src={boldArrowImg} className="size-4 -rotate-45 invert"/></p>
                    </div>
                </div>
            </div>
            <VideoBackground />
        </div>
    </section>
  )
}

export default Contact;
