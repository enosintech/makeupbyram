import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Footer from "../components/Footer";

import { setScrollTop, selectScrollTop, setLogoObserver, setAppointmentButtonObserver, setBurgerActive } from "../../slices/navSlice";

import featuredCoverBG from "../assets/images/featuredCoverBG.jpg";
import featuredImage1 from "../assets/images/featuredImage1.jpg";
import featuredImage2 from "../assets/images/featuredImage2.jpg";
import featuredImage3 from "../assets/images/featuredImage3.jpg";

import creativeEdit1 from "../assets/images/creativeEdit1.jpg";
import creativeEdit2 from "../assets/images/creativeEdit2.jpg";
import creativeEdit3 from "../assets/images/creativeEdit3.jpg";

import shootmakeup1 from "../assets/images/shootmakeup1.jpg";
import shootmakeup2 from "../assets/images/shootmakeup2.jpg";
import shootmakeup3 from "../assets/images/shootmakeup3.jpg";

import runwaymakeup1 from "../assets/images/runwaymakeup1.jpg";
import runwaymakeup2 from "../assets/images/runwaymakeup2.jpg";
import runwaymakeup3 from "../assets/images/runwaymakeup3.jpg";

import masterclass1 from "../assets/images/masterclass1.jpg";
import masterclass2 from "../assets/images/masterclass2.jpg";
import masterclass3 from "../assets/images/masterclass3.jpg";

import faceCardImageRaw1 from "../assets/images/facecardImageRaw1.jpg";
import faceCardImageRaw2 from "../assets/images/facecardImageRaw2.jpg";
import faceCardImageRaw3 from "../assets/images/facecardImageRaw3.jpg";
import faceCardImageRaw4 from "../assets/images/facecardImageRaw4.jpg";
import faceCardImageRaw5 from "../assets/images/facecardImageRaw5.jpg";
import faceCardImageRaw6 from "../assets/images/facecardImageRaw6.jpg";
import faceCardImageRaw7 from "../assets/images/facecardImageRaw7.jpg";
import faceCardImageRaw8 from "../assets/images/facecardImageRaw8.jpg";

import facecard1 from "../assets/images/facecard1.jpg";
import facecard2 from "../assets/images/facecard2.jpg";
import facecard3 from "../assets/images/facecard3.jpg";
import facecard4 from "../assets/images/facecard4.jpg";

import train1 from "../assets/images/train1.jpg";
import train2 from "../assets/images/train2.jpg";
import train3 from "../assets/images/train3.jpg";
import train4 from "../assets/images/train4.jpg";
import train5 from "../assets/images/train5.jpg";
import train6 from "../assets/images/train6.jpg";
import train7 from "../assets/images/train7.jpg";
import train8 from "../assets/images/train8.jpg";
import train9 from "../assets/images/train9.jpg";
import train10 from "../assets/images/train10.jpg";
import train11 from "../assets/images/train11.jpg";
import train12 from "../assets/images/train12.jpg";
import train13 from "../assets/images/train13.jpg";
import train14 from "../assets/images/train14.jpg";
import train15 from "../assets/images/train15.jpg";
import train16 from "../assets/images/train16.jpg";
import train17 from "../assets/images/train17.jpg";
import train18 from "../assets/images/train18.jpg";
import train19 from "../assets/images/train19.jpg";
import train20 from "../assets/images/train20.jpg";
import train21 from "../assets/images/train21.jpg";

import detailsFeatured1 from "../assets/images/detailsFeatured1.jpg";
import detailsFeatured2 from "../assets/images/detailsFeatured2.jpg";

import detailsMain2 from "../assets/images/detailsMain2.jpg";

import processVideo1 from "../assets/videos/processVideo1.mp4";
import processVideo2 from "../assets/videos/processVideo2.mp4";

import processMain1 from "../assets/images/processMain1.jpg";
import processMain2 from "../assets/images/processMain2.jpg";
import processMain3 from "../assets/images/processMain3.jpg";
import processMain4 from "../assets/images/processMain4.jpg";
import processMain5 from "../assets/images/processMain5.jpg";

import makeupPieces from "../assets/images/makeupPieces.png";

import creativeWorkVideo1 from "../assets/videos/creativeWorkVideo1.mp4"
import creativeWorkVideo2 from "../assets/videos/creativeWorkVideo2.mp4"

import creativework1 from "../assets/images/creativework1.jpg";
import creativework2 from "../assets/images/creativework2.jpg";
import creativework3 from "../assets/images/creativework3.jpg";
import creativework4 from "../assets/images/creativework4.jpg";
import creativework5 from "../assets/images/creativework5.jpg";
import creativework6 from "../assets/images/creativework6.jpg";
import creativework7 from "../assets/images/creativework7.jpg";

import makeupwork1 from "../assets/images/makeupwork1.jpg";
import makeupwork2 from "../assets/images/makeupwork2.jpg";
import makeupwork3 from "../assets/images/makeupwork3.jpg";
import makeupwork4 from "../assets/images/makeupwork4.jpg";
import makeupwork5 from "../assets/images/makeupwork5.jpg";
import makeupwork6 from "../assets/images/makeupwork6.jpg";
import makeupwork7 from "../assets/images/makeupwork7.jpg";
import makeupwork8 from "../assets/images/makeupwork8.jpg";
import makeupwork9 from "../assets/images/makeupwork9.jpg";
import makeupwork10 from "../assets/images/makeupwork10.jpg";
import makeupwork11 from "../assets/images/makeupwork11.jpg";
import makeupwork12 from "../assets/images/makeupwork12.jpg";
import makeupwork13 from "../assets/images/makeupwork13.jpg";

import runwaywork1 from "../assets/images/runwaywork1.jpg";
import runwaywork2 from "../assets/images/runwaywork2.jpg";
import runwaywork3 from "../assets/images/runwaywork3.jpg";
import runwaywork4 from "../assets/images/runwaywork4.jpg";
import runwaywork5 from "../assets/images/runwaywork5.jpg";
import runwaywork6 from "../assets/images/runwaywork6.jpg";
import runwaywork7 from "../assets/images/runwaywork7.jpg";

import runwayvid1 from "../assets/videos/runwayvid1.mp4";
import runwaywayvid2 from "../assets/videos/runwayvid2.mp4";
import runwaywayvid3 from "../assets/videos/runwayvid3.mp4";

import portraitvid1 from "../assets/videos/portraitvid1.mp4";
import portraitvid2 from "../assets/videos/portraitvid2.mp4";
import portraitvid3 from "../assets/videos/portraitvid3.mp4";

import purplemakeup from "../assets/images/purplemakeup.jpg";
import brownmakeup from "../assets/images/brownmakeup.jpg";
import typography from "../assets/images/typography.jpg";

import parallax1 from "../assets/images/parallax1.jpg";
import parallax2 from "../assets/images/parallax2.jpg";
import parallax3 from "../assets/images/parallax3.jpg";
import chanel from "../assets/images/chanel.jpg";
import wavy from "../assets/images/wavy.jpg";

gsap.registerPlugin(ScrollTrigger);

const ServicesComponent = (props) => {
  return (
    <div className="group relative w-full h-1/4 border-y border-white flex items-center px-10 transition-all duration-300">
      <span className="text-[25px] md:text-[40px] lg:text-[50px] xl:text-[60px] uppercase font-normal md:font-light transition-all duration-150">{props.service}</span>
      <span className="text-[15px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] absolute right-10 uppercase z-10 font-arch-b italic opacity-0 group-hover:opacity-100 transition-all duration-150">{props.description}</span>
      <div className="absolute w-full h-0 group-hover:h-full transition-all duration-400 -translate-x-10 flex">
        <img className={` h-full object-cover ${props.index === 0 || props.index === 1 || props.index === 2 ? "w-1/2 sm:w-1/3" : props.index === 3 ? "w-0 sm:w-1/3" : "w-1/3"}`} src={props.image1}/>
        <img className={` h-full object-cover ${props.index === 0 ? "w-0 sm:w-1/3" : props.index === 2 ? "w-1/2 sm:w-1/3" : props.index === 3 ? "w-1/2 sm:w-1/3" : props.index === 1 ? "w-1/2 sm:w-1/3 object-left" : "w-1/3"}`} src={props.image2}/>
        <img className={`h-full object-cover  ${props.index === 0 || props.index === 3 ? "w-1/2 sm:w-1/3" : "w-1/3"} ${props.description === "elegant" ? "object-top" : ""}`} src={props.image3}/>
      </div>
    </div>
  )
}

const FeaturedImagesComponent = (props) => {
  return (
    <div className="w-1/3 sm:w-[20%] md:w-[25%] lg:w-[29%] h-[80%] sm:h-full lg:h-[50%] xl:h-[65%] 2xl:h-[80%] shadow-md border-[10px]">
      <img className="w-full h-full object-cover" src={props.source} alt="" />
    </div>
  )
}

function HomeScreen() {
  const paraRef = useRef(null);
  const scrollTop = useSelector(selectScrollTop)
  const dispatch = useDispatch();
  const [ contact, setContact ] = useState("appointment");
  const [activeWork, setActiveWork ] = useState("creative");
  const [ date, setDate ] = useState(new Date());

  const handleScroll = () => {
    if(paraRef.current){
      dispatch(setScrollTop(paraRef.current.current))
    }

    dispatch(setBurgerActive(false))
  }

  const onContactChange = (e) => {
    setContact(e.target.value) 
  }

  const mainLogoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        dispatch(setLogoObserver(false));
      } else {
        dispatch(setLogoObserver(true));
      }
    });
  });

  const appointmentBtnObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        dispatch(setAppointmentButtonObserver(true));
      } else {
        dispatch(setAppointmentButtonObserver(false));
      }
    })
  })

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img",
        scrub: true,
      }
    })
    .fromTo(".img", {
        y: 829,
        ease: "power2.out",
    }, {
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out"
    })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery-text",
        scrub: true,
      }
    })
    .fromTo(".gallery-text", {
      scale: 1,
      ease: "expoScale(0.5,7,none)"
    }, {
      scale: 2,
      ease: "expoScale(0.5,7,none)"
    })

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery1",
        scrub: true,
        ease: "expoScale(0.5,7,none)"
      }
    })
    .fromTo(".gallery1", {
      y: -200,
      ease: "expoScale(0.5,7,none)",
      duration: 20
    },
    {
      y: 900,
      ease: "expoScale(0.5,7,none)",
      duration: 20,
    })

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery2",
        scrub: true,
        ease: "expoScale(0.5,7,none)"
      }
    })
    .fromTo(".gallery2", {
      y: 0,
      ease: "expoScale(0.5,7,none)"
    },
    {
      y: -800,
      ease: "expoScale(0.5,7,none)"
    })

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery3",
        scrub: true,
        ease: "expoScale(0.5,7,none)"
      },
    })
    .fromTo(".gallery3", {
      y: 0,
      ease: "expoScale(0.5,7,none)"
    },
    {
      y: 600,
      ease: "expoScale(0.5,7,none)"
    })

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery4",
        scrub: true,
        ease: "expoScale(0.5,7,none)"
      }
    })
    .fromTo(".gallery4", {
      y: 0,
      ease: "expoScale(0.5,7,none)"
    },
    {
      y: -1000,
      ease: "expoScale(0.5,7,none)"
    })
  }, [scrollTop])

  useEffect(() => {
    const container = document.querySelector(".parallaxContainer")
    container.addEventListener("scroll", handleScroll)
    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const logoObserve = document.querySelectorAll(".logoObserve");
    const buttonObserve = document.querySelectorAll(".buttonObserve");
    logoObserve.forEach((el) => mainLogoObserver.observe(el));
    buttonObserve.forEach((el) => appointmentBtnObserver.observe(el));

    return () => {
      logoObserve.forEach((el) => mainLogoObserver.unobserve(el));
      buttonObserve.forEach((el) => appointmentBtnObserver.unobserve(el));
    }
  }, [scrollTop])

  return (
    <Parallax
      className="parallaxContainer"
      pages={10.5}
      ref={paraRef}
    >
      <ParallaxLayer
        offset={0}
        
        factor={20}
        style={{
          zIndex: 0
        }}
      >
        <div className="w-full h-full bg-black">

        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        className="left-0 right-0 mx-auto"
        style={{
          width: "100dvw",
          height: "100dvh",
          zIndex: 15,
        }}
      >
        <div className="w-full h-full flex items-end py-40 sm:py-48 md:py-56 lg:py-64 xl:py-80 justify-center">
          <div className="h-[60px] w-[30px] border-[5px] border-white mb-20 rounded-full flex justify-center py-[0.5px]">
            <div className={`w-[15px] h-[15px] rounded-full bg-white animate-bouncer`}></div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        horizontal
        speed={3}

        style={{
          zIndex: 15,
          height: "100dvh",
        }}
      >
        <div className={`w-full h-full flex flex-col justify-end py-20 xl:text-[265px] lg:text-[200px] md:text-[150px] sm:text-[115px] text-[90px] transition-all font-extrabold font-arch-b uppercase`}>
          <div className="w-fit h-fit logoObserve">
            <span className="text-white">makeupby</span>
            <span className="text-purple-950">ram</span>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{
          zIndex: 15,
          height: "100dvh",
        }}
      >
        <div className="w-full h-full pt-[100px]">
          <div className="w-full h-[85%] relative flex flex-col justify-end">
            <div className="w-full h-[15%] flex items-center flex-row-reverse justify-between px-5 sm:px-12">
              <div className="w-fit h-fit p-3 rounded-full border-white border-4 flex items-center justify-center text-white uppercase font-semibold font-arch-b">
                est. 2022
              </div>
              <div className="left-5 w-fit h-fit p-3 px-0 sm:px-3  flex items-center justify-center text-white uppercase font-arch font-extrabold">
                what i offer
              </div>
            </div>
            <div className="w-full h-[85%] flex flex-col border-y text-white border-white">
              {services.map((service, index) => (
                <ServicesComponent 
                  key={service.id}
                  index={index}
                  {...service}
                />
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{
          start: 0.7,
          end: 8.5
        }}
        className="left-0 right-0 mx-auto"
        style={{
          zIndex: 20,
          width: "fit-content",
          height: "fit-content",
          top: 600
        }}
      >
        <div className={`buttonObserve p-4 cursor-pointer hover:opacity-50 active:opacity-25 select-none bg-purple-950 rounded-full flex items-center justify-center uppercase text-white font-arch-b `}>
          <span className="text-[15px]">contact me</span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          width: window.innerWidth < 1024 ? "100dvw" : "50dvw",
          height: window.innerWidth  < 1024 ? "50dvh" : "100dvh",
          zIndex: 15,
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img src={featuredCoverBG} className="w-[80%] h-full object-cover bg-black" alt="featured photos cover"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        className="paralysed"
        style={{
          width: window.innerWidth < 1024 ? "100dvw" : "50dvw",
          height: window.innerWidth  < 1024 ? "50dvh" : "100dvh",
          zIndex: 15,
          left: window.innerWidth  < 1024 ? 0 : "50%",
          marginTop: window.innerWidth  < 1024 ? "50%" : 0,
          backgroundColor: "black",
        }}
      >
        <div className="w-full lg:h-full h-[600px] p-5 sm:p-10 lg:p-10 2xl:p-20 flex flex-col items-center">
          <div className="w-full h-full lg:h-[60%] text-white">
            <div className="w-full h-[20%] flex items-center justify-center">
              <h1 className="font-arch-b uppercase">featured</h1>
            </div>
            <div className="relative w-full h-[80%] flex items-start justify-center text-justify text-[15px] xl:text-[18px] px-1 md:px-5 lg:px-10 py-1 md:py-5">
              <p className="font-arch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius facere possimus ullam molestias quo magnam, voluptatem amet facilis architecto sunt id distinctio commodi, laboriosam aspernatur quae maxime omnis sit doloremque.
Consectetur voluptatum autem ab magni illo eum, itaque eaque culpa perspiciatis nemo fuga laudantium cumque architecto inventore quisquam id est quibusdam dolor soluta assumenda fugiat doloremque! </p>
              <div className="absolute bottom-4 xl:bottom-8 md:right-10 right-0 cursor-pointer hover:opacity-50 active:opactity-25">
                <Link to="/about">
                  <span className="text-purple-950 uppercase font-arch-b mr-2">read about me</span>
                  <span><FontAwesomeIcon icon={faChevronRight} color="rgb(59 7 100/1)"/></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[40%] flex justify-evenly gap-1 sm:gap-0">
            {featuredImages.map((image, index) => (
              <FeaturedImagesComponent 
                key={image.id}
                index={index}
                {...image}
              />
            ))}
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0.4}
        style={{
          zIndex: 15,
        }}
      >
        <div className="w-full h-full flex lg:flex-row flex-col">
          <div className="lg:w-1/4 w-full h-full flex flex-col items-center">
            <div className="w-full lg:h-[6%] mb-1 h-[30%] flex items-center justify-center">
              <span className="uppercase font-arch-b text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-white">my work</span>
            </div>
            <div className="lg:w-[80%] w-[20%] md:w-[10%] h-0 border-2 mb-2"></div>
            <div className="w-full lg:h-[50%] h-[70%] flex lg:block text-[13px] pl-3 sm:pl-2 sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
              <div className="lg:w-full w-1/3 lg:h-1/4 h-full flex items-center justify-center gap-2 cursor-pointer select-none hover:opacity-50 active:opacity-25" onClick={() => {
                setActiveWork("creative")
              }}>
                <div className={`font-arch uppercase transition-all duration-200 text-center text-white ${activeWork === "creative" ? "scale-[0.94] font-bold " : " font-thin"}`}>creative makeup</div>
                <FontAwesomeIcon icon={faChevronRight} size={`${window.innerWidth < 1024 ? "sm" : "md"}`} color="white" className={`${activeWork === "creative" ? "lg:opacity-100 opacity-0" : "opacity-0"} md:-translate-x-2 transition-all duration-100`}/>
              </div>
              <div className="lg:w-full w-1/3 lg:h-1/4 h-full flex items-center justify-center gap-2 cursor-pointer select-none hover:opacity-50 active:opacity-25" onClick={() => {
                setActiveWork("makeup")
              }}>
                <div className={`text-white font-arch uppercase transition-all duration-200 text-center ${activeWork === "makeup" ? "scale-[0.94] font-bold" : "font-thin"}`}>makeup portraits</div>
                <FontAwesomeIcon icon={faChevronRight} size={`${window.innerWidth < 1024 ? "sm" : "md"}`} color="white" className={`${activeWork === "makeup" ? "lg:opacity-100 opacity-0" : "opacity-0"} md:-translate-x-2 transition-all duration-100`}/>
              </div>
              <div className="lg:w-full w-1/3 lg:h-1/4 h-full flex items-center justify-center gap-2 cursor-pointer select-none hover:opacity-50 active:opacity-25" onClick={() => {
                setActiveWork("runway")
              }}>
                <div className={`text-white font-arch uppercase transition-all duration-200 text-center ${activeWork === "runway" ? "scale-[0.94] font-bold" : "font-thin"}`}>runway makeup</div>
                <FontAwesomeIcon icon={faChevronRight} size={`${window.innerWidth < 1024 ? "sm" : "md"}`} color="white" className={`${activeWork === "runway" ? "lg:opacity-100 opacity-0" : "opacity-0"} md:-translate-x-2 transition-all duration-100`}/>
              </div>
            </div>
          </div>
          <div className="relative lg:w-3/4 w-full h-full flex flex-col lg:border-l-2 mt-4 border-t-[6px] lg:border-t-0 lg:pl-3">
            {
              activeWork === "creative" 
              ?
              <div className="w-full h-[90%] flex gap-2 overflow-x-scroll overflow-y-scroll">
                <div className="w-full min-w-fit h-full grid gap-2 lg:grid-cols-4 grid-rows-3">
                  <div className=" row-span-2 col-span-2 row-start-1 col-start-1 workItem">
                    <video key={creativeWorkVideo2} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={creativeWorkVideo2} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 workItem">
                    <img className="w-full h-full object-cover" src={creativework1} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 col-start-2 workItem">
                  <img className="w-full h-full object-cover object-top" src={creativework3} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-2 row-start-1 col-start-3 workItem">
                  <img className="w-full h-full object-cover object-top" src={creativework5} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-2 col-start-3 workItem">
                  <img className="w-full h-full object-cover" src={facecard1} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 col-start-3 workItem">
                    <video key={processVideo1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={processVideo1} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-2 col-start-4 workItem">
                  <img className="w-full h-full object-cover" src={creativework6} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 col-start-4 workItem">
                  <img className="w-full h-full object-cover object-top" src={processMain3} alt="dontbyram"/>
                  </div>
                </div>
                <div className="w-full min-w-full h-full grid grid-rows-3 gap-2">
                  <div className="bg-blue-500 row-span-2 row-start-1 workItem">
                  <video key={creativeWorkVideo1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={creativeWorkVideo1} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  
                  <div className="bg-blue-500 row-span-2 col-span-2 row-start-2 col-start-2 workItem">
                  <video key={processVideo2} loop muted autoPlay className={`w-full h-full object-cover object-top transition-all duration-300`}>
                  <source src={processVideo2} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  <div className="bg-blue-500 workItem">
                  <img className="w-full h-full object-cover" src={facecard3} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500 workItem">
                  <img className="w-full h-full object-cover" src={featuredImage1} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500 workItem">
                  <img className="w-full h-full object-cover object-top" src={creativework2} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500 workItem">
                  <img className="w-full h-full object-cover" src={creativework7} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500 workItem row-span-2 row-start-2 col-start-4 workItem">
                  <img className="w-full h-full object-cover" src={featuredCoverBG} alt="dontbyram"/>
                  </div>
                  
                </div>
              </div>
              :
              activeWork === "makeup"
              ?
              <div className="w-full h-[90%] flex gap-2 overflow-x-scroll overflow-y-scroll">
                <div className="w-full min-w-fit h-full grid gap-2 lg:grid-cols-4 grid-rows-3">
                  <div className=" row-span-2 col-span-2 row-start-1 col-start-2 workItem">
                  <video key={portraitvid1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={portraitvid1} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork5} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-2 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork6} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-1 col-start-1 workItem">
                  <img className="w-full h-full object-cover" src={makeupwork1} alt="dontbyram"/>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-2 col-start-1 workItem">
                  <img className="w-full h-full object-cover" src={makeupwork2} alt="dontbyram"/>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-3 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork7} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-1 col-start-4 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork3} alt="dontbyram"/>

                  </div>
                  <div className="col-span-1 row-start-2 col-start-4 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork4} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-4 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork8} alt="dontbyram"/>
                  </div>
                </div>
                <div className="w-full min-w-full h-full grid grid-rows-3 gap-2">
                  <div className=" row-span-2 row-start-1 workItem">
                  <video key={portraitvid2} loop muted autoPlay className={`w-full h-full object-cover object-top transition-all duration-300`}>
                  <source src={portraitvid2} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  
                  <div className="row-span-2 col-span-2 row-start-2 col-start-3 workItem">
                  <video key={portraitvid3} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={portraitvid3} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  <div className="workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork11} alt="dontbyram"/>

                  </div>
                  <div className="workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork12} alt="dontbyram"/>

                  </div>
                  <div className="workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork13} alt="dontbyram"/>

                  </div>
                  <div className="workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork10} alt="dontbyram"/>

                  </div>
                  <div className="row-span-2 row-start-2 col-start-2 workItem">
                  <img className="w-full h-full object-cover object-top" src={makeupwork9} alt="dontbyram"/>

                  </div>
                  
                </div>
              </div>
              :
              <div className={`w-full h-[90%] flex gap-1 ${window.innerWidth >= 1100 ? "overflow-x-hidden" : "overflow-x-scroll"} overflow-y-scroll`}>
                <div className="w-full min-w-full h-full grid gap-2 lg:grid-cols-4 grid-rows-3">
                  <div className="row-span-2 col-span-2 row-start-1 col-start-1 workItem">
                  <video key={runwayvid1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={runwayvid1} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3 workItem">
                  <img className="w-full h-full object-cover object-top" src={runwaywork5} alt="dontbyram"/>

                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3 col-start-2 workItem">
                  <img className="w-full h-full object-cover object-top" src={runwaywork6} alt="dontbyram"/>

                  </div>
                  <div className=" row-span-1 col-span-2 row-start-1 col-start-3 workItem">
                  <img className="w-full h-full object-cover object-top" src={runwaywork4} alt="dontbyram"/>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-2 col-start-3 workItem">
                  <img className="w-full h-full object-cover object-top" src={runwaywork1} alt="dontbyram"/>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3 col-start-3 workItem">
                  <video key={runwaywayvid2} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={runwaywayvid2} type="video/mp4"/>
                      Video Format Not supported
                    </video>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-2 col-start-4 workItem">
                  <img className="w-full h-full object-cover object-top" src={runwaywork2} alt="dontbyram"/>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-4 workItem">
                
                  <video key={runwaywayvid3} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={runwaywayvid3} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                </div>
              </div>
            }
            <div className="absolute z-20 bottom-0 translate-x-12 w-full h-[10%] flex items-center justify-end px-10">
              <div className="w-fit p-3 h-fit flex items-center justify-center gap-3">
                <span className="uppercase font-arch font-thin text-white tracking-wider">{activeWork === "runway" && window.innerWidth >= 1100 ? "no scroll" : 'scroll'}</span>
                <div className={`w-[100px] h-[20px] flex items-center ${activeWork === "runway" && window.innerWidth >= 1100 ? "justify-end" : "justify-start"}`}>
                  <div className={`w-[40px] h-0 border transition-all duration-200 ${activeWork === "runway" && window.innerWidth >= 1100 ? "" : "animate-scroll"}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={4}
        factor={2}
        speed={0.6}
        style={{
          zIndex: 15,
          overflow: "hidden",
          width: "100%",
          height: "200dvh",
          position: "relative"
        }}
      >
       <div className="fixed z-20 gallery-dark w-full h-full bg-gradient-to-b from-black from-5% via-transparent to-95% to-black"></div>
       <div className="fixed z-20 w-full h-full mask"></div>

       <section className="w-full h-full flex items-center justify-center">
          <h1 className="gallery-text font-arch-b uppercase text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem]">bolder</h1>
       </section>

       <section className="h-full w-full absolute top-0 z-[15]">
        <div className="line"></div>
        <div className="line"></div>
       </section>

       <section className="gallery w-full top-0 absolute">
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div> 
        <div className="img"></div>
       </section>
      </ParallaxLayer>

      <ParallaxLayer
        offset={6}
        speed={0.4}
        style={{
          zIndex: 15,
        }}
      >
        <div className="-mt-72 w-full h-[150vh] grid grid-cols-4 grid-rows-5">
          <div className="col-span-4 row-span-2 translate-x-20 flex">
            <div className="h-full w-1/2 relative">
              <img className="glide1 w-[35%] h-[70%] object-cover border-[10px] z-50 border-white absolute translate-x-[50%] top-3" src={processMain1} alt="ram"/>
              <img className="glide2 w-[35%] h-[70%] object-cover border-[8px] z-40 border-white absolute translate-x-[65%] translate-y-[10%] top-3" src={processMain4} alt="ram"/>
              <img className="glide3 w-[35%] h-[70%] object-cover border-[6px] z-30 border-white absolute translate-x-[80%] translate-y-[20%] top-3" src={processMain3} alt="ram"/>
              <img className="glide4 w-[35%] h-[70%] object-cover border-[4px] z-20 border-white absolute translate-x-[95%] translate-y-[30%] top-3" src={processMain2} alt="ram"/>
              <img className="glide5 w-[35%] h-[70%] object-cover border-[2px] z-10 border-white absolute translate-x-[110%] translate-y-[40%] top-3" src={processMain5} alt="ram"/>
            </div>
            <div className="h-full w-1/2 flex flex-col py-16 translate-y-5">
              <div className="w-full h-[15%]">
                <div className="w-fit h-full -translate-y-5 flex items-center justify-center gap-2">
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                    <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center">
                      <div className="w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center">
                        <div className="w-[15px] h-[15px] rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
                </div>
              </div>
              <div className="w-full h-[60%] font-arch font-light text-white text-left text-[3.5rem]">
                <p className="h-full w-[70%] ">Loreming ipsum dolor sitsitsit of amet</p>
              </div>
              <div className="w-full h-[35%] text-white text-[17px] font-extralight">
                <p className="w-[50%] h-[60%]">Lorem ipsum dolor sit amet. I have a big belly. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-3 flex items-center justify-center">
            <div className="w-[90%] h-[80%] relative">
              <div className="w-fit h-fit p-4 bg-white z-20 absolute rounded-full font-arch-b uppercase text-[15px] bottom-5 left-5">makeupbyram</div>
              <img className="w-full h-full object-cover" src={wavy} alt="for design"/>
              <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-transparent via-transparent via-[99.9%] to-[99.9%] to-black"></div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={7}
        speed={0.9}
        style={{
          zIndex: 15,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-[170px] bg-white transition-all duration-300 left-0 w-[450px] h-[450px] rounded-full -translate-x-10 flex items-center justify-center">
            <span className="text-[50px] text-black font-ubuntu">eyes</span>
          </div>
          <div className="bg-white w-[300px] h-[300px] rounded-full absolute bottom-[60px] left-[350px]">
            <img className="w-full h-full rounded-full object-cover" src={detailsFeatured2} alt="makeupbyram" />
          </div>
          <div className="group w-[650px] h-[650px] rounded-full absolute right-[470px] flex items-center justify-center">
            <img className="absolute w-full h-full rounded-full object-cover opacity-100 transition-all duration-300" src={detailsFeatured1} alt="makeupbyram" />
          </div>
          <div className="w-[250px] h-[250px] rounded-full absolute right-[235px] top-[50px]">
            <img className="w-full h-full rounded-full object-cover" src={detailsMain2} alt="makeupbyram" />
          </div>
          <div className="w-[550px] group bg-[#beadfa] transition-all duration-300 h-[550px] rounded-full absolute bottom-[-5px] right-[-50px] flex items-center justify-center">
            <span className="text-[50px] text-white font-ubuntu">lips</span>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={8}
        factor={2}
        speed={0.5}
        style={{
          zIndex: 15,
          width: "100dvw",
          height: "175dvh",
        }}
      >
        <div className="image-gallery relative">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black via-transparent to-black z-20"></div>
          <div className="gallery1 image-column ">
          <div className="imageContainer">
          <video key={processVideo2} loop muted autoPlay className={`absolute z-0 w-full h-full object-cover object-center transition-all duration-300`}>
              <source src={processVideo2} type="video/mp4"/>
              Video Format Not supported
            </video>
          </div>
          <div className="imageContainer">
            <div className="w-full h-full bg-[#1c1ca2] flex flex-col items-center justify-evenly">
              <div className="colour-1 aurora"></div>
              <div className="colour-2 aurora"></div>
              <div className="colour-3 aurora"></div>
              <div className="w-[70%] h-[70%] absolute z-10 flex items-center justify-center">
                <div className="w-fit h-fit -rotate-90 sm:rotate-0 translate-x-3 sm:translate-x-7 text-white font-arch-b uppercase text-[5rem] flex items-center justify-center">
                  <div className="translate-x-5">u</div>
                  <div className="-translate-y-5">n</div>
                  <div className="translate-y-5 -translate-x-5">i</div>
                  <div className="-translate-x-10">q</div>
                  <div className="-translate-y-2 -translate-x-14">u</div>
                  <div className="-translate-x-20">e</div>
                </div>
              </div>
            </div>
          </div>
          <div className="imageContainer">
            <img src={faceCardImageRaw4} alt="makeupbyram" className="object-cover h-full"/>
          </div>
          <div className="imageContainer">
            <img src="" alt="makeupbyram" className="object-cover"/>
          </div>
          <div className="imageContainer">
            <img src="" alt="makeupbyram" className="object-cover"/>
          </div>
          <div className="imageContainer">
            <img src="" alt="makeupbyram" className="object-cover"/>
          </div>
          </div>
      <div className="gallery2 image-column ">
        <div className="imageContainer">
          <img src="" alt="makeupbyram" className="object-cover"/>
        </div>
        <div className="imageContainer">
          <img src="" alt="makeupbyram" className="w-full h-full bg-black object-cover"/>
        </div>
        <div className="imageContainer">
          <img src={brownmakeup} alt="makeupbyram" className="w-full h-full object-cover object-center"/>
        </div>
        <div className="imageContainer">
        <video key={runwayvid1} loop muted autoPlay className={`absolute z-0 w-full h-full object-cover object-center transition-all duration-300`}>
              <source src={runwayvid1} type="video/mp4"/>
              Video Format Not supported
            </video>
        </div>
        <div className="imageContainer">
          <img src={train18} alt="makeupbyram" className="w-full h-full object-center object-cover"/>
        </div>
        <div className="imageContainer">
          <img src={runwaywork2} alt="makeupbyram" className="w-full h-full object-center object-cover"/>
        </div>
      </div>
    <div className="gallery3 image-column ">
        <div className="imageContainer">
          <img src={facecard2} alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
        <div className="imageContainer">
          <img src={runwaywork1} alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
        <div className="imageContainer">
          <img src={typography} alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
         <div className="imageContainer">
          <img src="" alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
         <div className="imageContainer">
          <img src="" alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
         <div className="imageContainer">
          <img src="" alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
    </div>
    <div className="gallery4 image-column ">
        <div className="imageContainer">
          <img src="" alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
        <div className="imageContainer">
          <img src="" alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
        <div className="imageContainer">
          <img src={creativework2} alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
        <div className="imageContainer">
          <div className="w-full h-full bg-white flex items-center justify-center">
            <div className="w-[100%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[30%] sm:h-[35%] md:h-[45%] lg:h-[52%] xl:h-[60%] grid grid-cols-4 grid-rows-4 gap-1">
              <div className="relative bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>e</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">9</span>
              </div>
              <div className="relative bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>n</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">2</span>
              </div>
              <div className="relative bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>c</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">6</span>
              </div>
              <div className="relative bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>h</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">3</span>
              </div>
              <div className="relative col-start-2 bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>a</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">4</span>
              </div>
              <div className="relative col-start-3 bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>n</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">2</span>
              </div>
              <div className="relative col-start-4 bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>t</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">1</span>
              </div>
              <div className="relative col-start-3 bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>i</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">8</span>
              </div>
              <div className="relative col-start-4 bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>n</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">2</span>
              </div>
              <div className="relative col-start-4 bg-purple-950 rounded-xl flex items-center justify-center text-white uppercase font-arch-b text-[15px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px]">
                <h1>g</h1>
                <span className="absolute text-white text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] bottom-1 md:bottom-2 right-0 sm:right-1 md:right-2 lg:right-3">5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src={processMain1} alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
        <div className="imageContainer">
          <img src={chanel} alt="makeupbyram" className="w-full h-full object-cover"/>
        </div>
    </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={9.7}
        speed={0.4}
        style={{
          zIndex: 15,
          height: "100dvh",
          width: "100dvw"
        }}
      >
        <div className="w-full h-full sm:px-[3rem] xl:px-[10rem] 2xl:px-[20rem] relative flex items-center justify-center">
          <Footer/>
          <div className="w-[85%] h-[70%] border-2 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[80px] xl:rounded-[100px] relative flex flex-col items-center pt-10">
            <div className="absolute -top-5 sm:-top-6 lg:-top-8 xl:-top-10 left-0 right-0 mx-auto bg-black w-fit h-fit p-2 px-2">
              <span className="text-white font-font-paris text-[15px] sm:text-[22px] md:text-[30px] lg:text-[34px] xl:text-[40px]">One last step to an amazing look</span>
            </div>
            <div className="w-4/5 md:w-3/5 lg:w-2/5 h-[10%] border rounded-full flex items-center justify-evenly">
                <input className="radio w-[20px] h-[20px]" type="radio" name="contact" value="inquiry" id="inq" checked={contact === "inquiry"} onChange={onContactChange}/>
                <label className="text-white font-os font-light text-[15px]" for="inq">Inquiry</label>
                <input className="radio w-[20px] h-[20px]" type="radio" name="contact" value="appointment" id="app" checked={contact === "appointment"} onChange={onContactChange}/>
                <label className="text-white font-os font-light text-[15px]" for="app">Appointment</label>
            </div>
            <div className="w-full h-[70%] translate-y-2 border-y-[0.5px]">
              <form className="w-full h-full flex flex-col">
                <div className="w-full h-1/3 flex flex-col border-b-[0.5px]">
                  <div className="w-full h-1/3 border-b-[0.25px] flex items-center pl-5">
                    <label className="text-white w-[20%] sm:w-[15%] md:w-[10%] flex items-center justify-center text-[15px] font-arch-b uppercase">Name</label>
                    <input type="text" className="w-[80%] sm:w-[85%] md:w-[90%] h-full bg-black text-[15px] font-arch-b uppercase px-3 text-purple-950 outline-none  placeholder:text-gray-400 placeholder:opacity-25" placeholder="Enter your Full Name"/>
                  </div>
                  <div className="w-full h-1/3 border-b-[0.25px] flex items-center pl-5">
                    <label className="text-white w-[20%] sm:w-[15%] md:w-[10%] flex items-center justify-center text-[15px] font-arch-b uppercase">Email</label>
                    <input type="email" className="w-[80%] sm:w-[85%] md:w-[90%] h-full bg-black text-[15px] font-arch-b uppercase px-3 text-purple-300 outline-none  placeholder:text-gray-400 placeholder:opacity-25" placeholder="Enter your Email"/>
                  </div>
                  <div className="w-full h-1/3 flex items-center pl-5">
                    <label className="text-white w-[20%] sm:w-[15%] md:w-[10%] flex items-center justify-center text-[15px] font-arch-b uppercase">Mobile</label>
                    <input type="text" className="w-[80%] sm:w-[85%] md:w-[90%] h-full bg-black text-[15px] font-arch-b uppercase px-3 text-purple-50 outline-none  placeholder:text-gray-400 placeholder:opacity-25" placeholder="Enter your Phone #"/>
                  </div>
                </div>
                <div className="w-full h-2/3">
                  {
                    contact === "inquiry"
                    ?
                    <div className="w-full h-full flex flex-col">
                      <div className="w-full h-[15%] flex items-center justify-center">
                        <span className="text-white font-arch-b uppercase text-[15px]">inquiry</span>
                      </div>
                      <div className="w-full h-[85%]">
                        <textarea
                          className="w-full h-full p-5 outline-none bg-black font-arch text-[20px] text-white resize-none placeholder:text-gray-400 placeholder:opacity-25"
                          placeholder="What would you like to find out?"
                        >

                        </textarea>
                      </div>
                    </div>
                    :
                    <div className="w-full h-full flex">
                      <div className="w-[70%] h-full flex flex-wrap justify-evenly">
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio w-[20px] sm:w-[15px] md:w-[17px] lg:w-[20px] sm:h-[15px] md:h-[17px] lg:h-[20px] h-[13px] ml-2"/>
                          <label for="1" className="font-arch-b uppercase text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio w-[20px] sm:w-[15px] md:w-[17px] lg:w-[20px] sm:h-[15px] md:h-[17px] lg:h-[20px] h-[13px] ml-2"/>
                          <label for="1" className="font-arch-b uppercase text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio w-[20px] sm:w-[15px] md:w-[17px] lg:w-[20px] sm:h-[15px] md:h-[17px] lg:h-[20px] h-[13px] ml-2"/>
                          <label for="1" className="font-arch-b uppercase text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio w-[20px] sm:w-[15px] md:w-[17px] lg:w-[20px] sm:h-[15px] md:h-[17px] lg:h-[20px] h-[13px] ml-2"/>
                          <label for="1" className="font-arch-b uppercase text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio w-[20px] sm:w-[15px] md:w-[17px] lg:w-[20px] sm:h-[15px] md:h-[17px] lg:h-[20px] h-[13px] ml-2"/>
                          <label for="1" className="font-arch-b uppercase text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio w-[20px] sm:w-[15px] md:w-[17px] lg:w-[20px] sm:h-[15px] md:h-[17px] lg:h-[20px] h-[13px] ml-2"/>
                          <label for="1" className="font-arch-b uppercase text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white">face to face private</label>
                        </div>
                      </div>
                      <div className="w-[30%] h-full flex flex-col justify-center border-l-[0.5px]">
                        <div className="w-full h-[40%] cursor-pointer select-none flex flex-col items-center py-5">
                          <span className="font-arch-b h-1/3 text-white uppercase text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] text-center mb-2">choose date & time</span>
                          <DatePicker selected={date} className="flex-1" onChange={(date) => {setDate(date)}} showTimeSelect closeOnScroll={true} dateFormat="MMMM dd h:mm aa"/>
                          <div className="border w-[80%]"></div>
                        </div>
                        <div className="w-full h-[30%] bg-black cursor-pointer select-none">
                          <div className="w-full h-full flex items-center justify-evenly hover:opacity-75 active:opacity-50">
                            <span className="font-arch-b text-white uppercase text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px]">Choose venue</span>
                            <FontAwesomeIcon icon={faChevronDown} size="sm" color="white"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </form>
            </div>
            <div className="absolute left-0 right-0 bottom-5 rounded-full mx-auto w-[50%] md:w-[30%] h-[10%] bg-purple-950 flex items-center justify-center cursor-pointer hover:opacity-75 active:opacity-50 select-none">
              <span className="uppercase font-arch-b text-[10px] sm:text-[12px] lg:text-[14px] text-white">{contact === "inquiry" ? "make inquiry" : "make appointment"}</span>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default HomeScreen;

const services = [
  {
    id: 1,
    service: "Creative Editorial Makeup",
    description: "my specialty",
    image1: creativeEdit1,
    image2: creativeEdit2,
    image3: creativeEdit3
  },
  {
    id: 2,
    service: "shoot makeup",
    description: "photo and video",
    image1: shootmakeup1,
    image2: shootmakeup3,
    image3: shootmakeup2
  },
  {
    id: 3,
    service: "runway makeup",
    description: "elegant",
    image1: runwaymakeup3,
    image2: runwaymakeup2,
    image3: runwaymakeup1
  },
  {
    id: 4,
    service: "makeup masterclass",
    description: "private & group lessons",
    image1: masterclass1,
    image2: masterclass2,
    image3: masterclass3,
  },
]

const featuredImages = [
  {
    id: 1,
    source: featuredImage1,
    description: "Makeup done by Ram",
  },
  {
    id: 2,
    source: featuredImage2,
    description: "Makeup done by Ram",
  },
  {
    id: 3,
    source: featuredImage3,
    description: "Makeup done by Ram",
  },
]



const images = [
  {

  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },

]
