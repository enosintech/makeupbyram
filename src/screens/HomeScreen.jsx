import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { act, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";

import { Model } from "../assets/3dmodel/Scene";
import { setScrollTop, selectScrollTop, selectScrollDirection, setScrollDirection } from "../../slices/navSlice";

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

const ServicesComponent = (props) => {
  return (
    <div className="group relative w-full h-1/4 border-y border-white flex items-center px-10 transition-all duration-300">
      <span className="text-[60px] uppercase font-light transition-all duration-150">{props.service}</span>
      <span className="text-[30px] absolute right-10 uppercase z-10 font-arch-b italic opacity-0 group-hover:opacity-100 transition-all duration-150">{props.description}</span>
      <div className="absolute w-full h-0 group-hover:h-full transition-all duration-400 -translate-x-10 flex">
        <img className="w-1/3 h-full object-cover" src={props.image1}/>
        <img className="w-1/3 h-full object-cover" src={props.image2}/>
        <img className={`w-1/3 h-full object-cover ${props.description === "elegant" ? "object-top" : ""}`} src={props.image3}/>
      </div>
    </div>
  )
}

const FeaturedImagesComponent = (props) => {
  return (
    <div className="w-[29%] h-[80%] shadow-md border-[10px]">
      <img className="w-full h-full object-cover" src={props.source} alt="" />
    </div>
  )
}

const LeftFaceCardImageComponent = (props) => {
  return (
    <div className="w-full h-1/3">  
      <img className="w-full h-full object-cover" src={props.source} alt={props.description}/>
    </div>
  )
}

const RightFaceCardImageComponent = (props) => {
  return (
    <div className="w-full h-1/3">  
      <img className="w-full h-full object-cover" src={props.source} alt={props.description}/>
    </div>
  )
}

const FaceCardTrainImagesComponent = (props) => {
  return (
    <img 
      src={props.source}
      className="min-w-[250px] w-[250px] h-full object-cover"
      alt={props.description}
    />
  )
}

function HomeScreen() {
  const paraRef = useRef(null);
  const scrollTop = useSelector(selectScrollTop)
  const scrollDirection = useSelector(selectScrollDirection)
  const dispatch = useDispatch();

  const [ appointmentButtonWidth, setAppointmentButtonWidth ] = useState(0);
  const [ appointmentButtonHeight, setAppointmentButtonHeight ] = useState(0);
  const [ trainTranslateX, setTrainTranslateX] = useState(5000);
  const [ faceCardTranslateY, setFaceCardTranslateY ] = useState(4200);
  const [ rightFaceCardTranslateY, setRightFaceCardTranslateY ] = useState(4200);
  const [ contact, setContact ] = useState("appointment");
  const [activeWork, setActiveWork ] = useState("creative");
  const [y, setY ] = useState(scrollTop); 

  const getScrollDirection = () => {
    if(y > scrollTop){
      dispatch(setScrollDirection("up"))
    } else if (y < scrollTop) {
      dispatch(setScrollDirection("down"))
    }
    setY(scrollTop);
  };

  console.log(`this is ${y} and this is ${scrollTop}`)

  const handleScroll = () => {
    if(paraRef.current){
      dispatch(setScrollTop(paraRef.current.current))
    }
  }

  const onContactChange = (e) => {
    setContact(e.target.value) 
  }

  const trainObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        if(scrollDirection === "down") {
          setTrainTranslateX(trainTranslateX + 60)
        } else if (scrollDirection === "up") {
          setTrainTranslateX(trainTranslateX - 60)
        }
      } else {
        setTrainTranslateX(5000)
      }
    });
  });

  const faceCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        console.log("isIntersecting")
        if(scrollDirection === "down"){
          setFaceCardTranslateY(faceCardTranslateY + 25)
          setRightFaceCardTranslateY(rightFaceCardTranslateY - 25)
        } else if(scrollDirection === "up") {
          setFaceCardTranslateY(faceCardTranslateY - 25)
          setRightFaceCardTranslateY(rightFaceCardTranslateY + 25)
        }
      } else {
        console.log("not")
        setFaceCardTranslateY(4200)
        setRightFaceCardTranslateY(4200)
      }
    });
  });

  useEffect(() => {
    getScrollDirection();
  }, [scrollTop])

  useEffect(() => {
    const trainElements = document.querySelectorAll(".trainTranslate");
    const leftFaceCardElements = document.querySelectorAll(".faceCardParallax")

    trainElements.forEach((el) => trainObserver.observe(el));
    leftFaceCardElements.forEach((el) => faceCardObserver.observe(el));

    return () => {
      trainElements.forEach((el) => trainObserver.unobserve(el));
      leftFaceCardElements.forEach((el) => faceCardObserver.unobserve(el));
    }
  }, [scrollTop])

  useEffect(() => {
    const container = document.querySelector(".parallaxContainer")
    container.addEventListener("scroll", handleScroll)
    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if(scrollTop > 750 && appointmentButtonWidth < 250) {
      setAppointmentButtonWidth(appointmentButtonWidth + 7)
    }

    if(scrollTop > 750 && appointmentButtonHeight < 54.5){
      setAppointmentButtonHeight(appointmentButtonHeight + 3)
    }
  }, [scrollTop])

  console.log(faceCardTranslateY, rightFaceCardTranslateY, scrollDirection);

  return (
    <Parallax
      className="parallaxContainer"
      pages={11}
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
          width: 30,
          height: 60,
          top: 370,
          zIndex: 15
        }}
      >
        <div className="h-full w-full border-[5px] border-white rounded-full flex justify-center py-[0.5px]">
          <div className={`w-[15px] h-[15px] rounded-full bg-white animate-bouncer`}></div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        horizontal
        speed={3}
        className="w-fit h-fit"
        style={{
          zIndex: 15
        }}
      >
        <div className={`text-[265px] translate-y-96 font-extrabold font-arch-b font-bold uppercase`}>
          <span className="text-white">makeupby</span>
          <span className="text-purple-950">ram</span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.9}
        speed={0.3}
        className={`left-0 right-0 mx-auto flex h-fit items-center justify-center transition-all duration-300 ${scrollTop > 170 && scrollTop < 640 ? "opacity-100" : "opacity-0"}`}
        style={{
          width: "50%",
          zIndex: 15,
        }}
      >
        {/*<Canvas camera={{ position: [5, 5, 14]}}>
          <ambientLight intensity={2}/>
          <directionalLight position={[2, 2, 2]} color="white" intensity={12} />
              <Model />
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas> */}
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.05}
        speed={0.3}
        style={{
          zIndex: 15
        }}
      >
        <div className="w-full h-full pt-[100px]">
          <div className="w-full h-[85%] relative flex flex-col justify-end">
            <div className="absolute top-3 right-5 w-fit h-fit p-3 rounded-full border-white border-4 flex items-center justify-center text-white uppercase font-semibold font-arch-b">
              est. 2022
            </div>
            <div className="absolute top-3 left-5 w-fit h-fit p-3 flex items-center justify-center text-white uppercase font-arch font-extrabold">
              what i offer
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
          start: 1.05,
          end: 8.9
        }}
        className="left-0 right-0 mx-auto"
        style={{
          zIndex: 20,
          width: appointmentButtonWidth,
          height: appointmentButtonHeight,
          top: 730
        }}
      >
        <div className={`w-full h-full ${appointmentButtonWidth >= 250 ? "p-4" : "p-0"} text-[15px] cursor-pointer hover:opacity-50 active:opacity-25 select-none bg-purple-950 rounded-full flex items-center justify-center uppercase text-white font-arch-b `}>
          <span className={`${appointmentButtonWidth < 250 ? "opacity-0" : "opacity-100"}`}>make an appointment</span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.7}
        style={{
          width: "50%",
          zIndex: 15,
          paddingLeft: 100
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img src={featuredCoverBG} className="w-[80%] h-full object-cover bg-black" alt="featured photos cover"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        style={{
          width: "50%",
          zIndex: 15,
          left: "50%"
        }}
      >
        <div className="w-full h-full p-20 flex flex-col items-center">
          <div className="w-full h-[60%] text-white">
            <div className="w-full h-[20%] flex items-center justify-center">
              <h1 className="font-arch-b uppercase">featured</h1>
            </div>
            <div className="relative w-full h-[80%] flex items-start justify-center text-justify px-10 py-10">
              <p className="font-os">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius facere possimus ullam molestias quo magnam, voluptatem amet facilis architecto sunt id distinctio commodi, laboriosam aspernatur quae maxime omnis sit doloremque.
Consectetur voluptatum autem ab magni illo eum, itaque eaque culpa perspiciatis nemo fuga laudantium cumque architecto inventore quisquam id est quibusdam dolor soluta assumenda fugiat doloremque! </p>
              <div className="absolute bottom-8 right-10 cursor-pointer hover:opacity-50 active:opactity-25">
                <Link to="/about">
                  <span className="text-purple-950 uppercase font-bold mr-2">read about me</span>
                  <span><FontAwesomeIcon icon={faChevronRight} color="rgb(59 7 100/1)"/></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[40%] flex justify-evenly">
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
        offset={4}
        className="faceCardParallax"
        speed={0.5}
        style={{
          zIndex: 15,
          overflow: "hidden"
        }}
      >
        <div className="w-full h-full bg-black flex items-center justify-center">
          <div className="relative overflow-hidden w-full h-full bg-black">
            
            <div className="absolute z-20 w-full h-full bg-gradient-to-b from-black from-20% via-transparent to-80% to-black">

            </div>
            <div className="absolute z-0 w-full h-full flex bg-black">
              <div className="min-w-1/3 w-1/3 mr-2 h-full flex flex-col faceCardTranslate transition-all duration-200" style={{
                transform: `translateY(-${faceCardTranslateY}px)`
              }}>
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
                 {leftFaceCardImages.map((image, index) => (
                  <LeftFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))} 
              </div>
              <div className="min-w-1/3 w-1/3 h-full">
                <video loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={processVideo1} type="video/mp4"/>
                  Video Format Not supported
                </video>
              </div>
              <div className="min-w-1/3 w-1/3 h-full ml-2 flex flex-col transition-all duration-200" style={{
                transform: `translateY(-${rightFaceCardTranslateY}px)`
              }}>
                {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
                 {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
                 {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
                 {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
                 {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
                 {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
                 {rightFaceCardImages.map((image, index) => (
                  <RightFaceCardImageComponent 
                    key={image.id}
                    index={index}
                    {...image}
                  />
                 ))}
              </div>
            </div>
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
        <div className="w-full h-full flex">
          <div className="w-1/4 h-full flex flex-col items-center">
            <div className="w-full h-[10%] flex items-center justify-center">
              <span className="uppercase font-arch-b text-[20px] text-white">my work</span>
            </div>
            <div className="w-[80%] h-0 border-2"></div>
            <div className="w-full h-[50%]">
              <div className="w-full h-1/4 flex items-center justify-center gap-2 cursor-pointer select-none hover:opacity-50 active:opacity-25" onClick={() => {
                setActiveWork("creative")
              }}>
                <div className={`font-arch uppercase transition-all duration-200 text-white ${activeWork === "creative" ? "scale-[0.94] font-bold " : " font-thin"}`}>creative editorial makeup</div>
                <FontAwesomeIcon icon={faChevronRight} size="md" color="white" className={`${activeWork === "creative" ? "opacity-100" : "opacity-0"} transition-all duration-100`}/>
              </div>
              <div className="w-full h-1/4 flex items-center justify-center gap-2 cursor-pointer select-none hover:opacity-50 active:opacity-25" onClick={() => {
                setActiveWork("makeup")
              }}>
                <div className={`text-white font-arch uppercase transition-all duration-200 ${activeWork === "makeup" ? "scale-[0.94] font-bold" : "font-thin"}`}>makeup portraits</div>
                <FontAwesomeIcon icon={faChevronRight} size="md" color="white" className={`${activeWork === "makeup" ? "opacity-100" : "opacity-0"} transition-all duration-100`}/>
              </div>
              <div className="w-full h-1/4 flex items-center justify-center gap-2 cursor-pointer select-none hover:opacity-50 active:opacity-25" onClick={() => {
                setActiveWork("runway")
              }}>
                <div className={`text-white font-arch uppercase transition-all duration-200 ${activeWork === "runway" ? "scale-[0.94] font-bold" : "font-thin"}`}>runway makeup</div>
                <FontAwesomeIcon icon={faChevronRight} size="md" color="white" className={`${activeWork === "runway" ? "opacity-100" : "opacity-0"} transition-all duration-100`}/>
              </div>
            </div>
          </div>
          <div className="relative w-3/4 h-full flex flex-col border-l-2 pl-3">
              <div className="absolute right-0 h-full w-[30%] bg-gradient-to-r from-transparent via-transparent to-black">

              </div>
            {
              activeWork === "creative" 
              ?
              <div className="w-full h-[90%] flex gap-2 overflow-x-scroll overflow-y-scroll">
                <div className="w-full min-w-full h-full grid gap-2 grid-cols-4 grid-rows-3">
                  <div className=" row-span-2 col-span-2 row-start-1 col-start-1">
                    <video key={creativeWorkVideo2} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={creativeWorkVideo2} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3">
                    <img className="w-full h-full object-cover" src={creativework1} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 col-start-2">
                  <img className="w-full h-full object-cover" src={facecard2} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-2 row-start-1 col-start-3">
                  <img className="w-full h-full object-cover object-top" src={creativework5} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-2 col-start-3">
                  <img className="w-full h-full object-cover" src={facecard1} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 col-start-3">
                  <img className="w-full h-full object-cover object-top" src={creativework3} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-2 col-start-4">
                  <img className="w-full h-full object-cover" src={creativework6} alt="dontbyram"/>
                  </div>
                  <div className="bg-red-500 row-span-1 col-span-1 row-start-3 col-start-4">
                  <img className="w-full h-full object-cover object-top" src={processMain3} alt="dontbyram"/>
                  </div>
                </div>
                <div className="w-full min-w-full h-full grid grid-rows-3 grid-cols-4 gap-2">
                  <div className="bg-blue-500 row-span-2 row-start-1">
                  <video key={creativeWorkVideo1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={creativeWorkVideo1} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  
                  <div className="bg-blue-500 row-span-2 col-span-2 row-start-2 col-start-2">
                  <video key={processVideo2} loop muted autoPlay className={`w-full h-full object-cover object-top transition-all duration-300`}>
                  <source src={processVideo2} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  <div className="bg-blue-500">
                  <img className="w-full h-full object-cover" src={facecard3} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500">
                  <img className="w-full h-full object-cover" src={featuredImage1} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500">
                  <img className="w-full h-full object-cover object-top" src={creativework2} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500">
                  <img className="w-full h-full object-cover" src={creativework7} alt="dontbyram"/>
                  </div>
                  <div className="bg-blue-500 row-span-2 row-start-2 col-start-4">
                  <img className="w-full h-full object-cover" src={featuredCoverBG} alt="dontbyram"/>
                  </div>
                  
                </div>
              </div>
              :
              activeWork === "makeup"
              ?
              <div className="w-full h-[90%] flex gap-2 overflow-x-scroll overflow-y-scroll">
                <div className="w-full min-w-full h-full grid gap-2 grid-cols-4 grid-rows-3">
                  <div className=" row-span-2 col-span-2 row-start-1 col-start-2">
                  <video key={portraitvid1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={portraitvid1} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3">
                  <img className="w-full h-full object-cover object-top" src={makeupwork5} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-2">
                  <img className="w-full h-full object-cover object-top" src={makeupwork6} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-1 col-start-1">
                  <img className="w-full h-full object-cover" src={makeupwork1} alt="dontbyram"/>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-2 col-start-1">
                  <img className="w-full h-full object-cover" src={makeupwork2} alt="dontbyram"/>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-3">
                  <img className="w-full h-full object-cover object-top" src={makeupwork7} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-1 col-start-4">
                  <img className="w-full h-full object-cover object-top" src={makeupwork3} alt="dontbyram"/>

                  </div>
                  <div className="col-span-1 row-start-2 col-start-4">
                  <img className="w-full h-full object-cover object-top" src={makeupwork4} alt="dontbyram"/>
                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-4">
                  <img className="w-full h-full object-cover object-top" src={makeupwork8} alt="dontbyram"/>
                  </div>
                </div>
                <div className="w-full min-w-full h-full grid grid-rows-3 grid-cols-4 gap-2">
                  <div className=" row-span-2 row-start-1">
                  <video key={portraitvid2} loop muted autoPlay className={`w-full h-full object-cover object-top transition-all duration-300`}>
                  <source src={portraitvid2} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  
                  <div className="row-span-2 col-span-2 row-start-2 col-start-3">
                  <video key={portraitvid3} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                  <source src={portraitvid3} type="video/mp4"/>
                  Video Format Not supported
                </video>
                  </div>
                  <div className="">
                  <img className="w-full h-full object-cover object-top" src={makeupwork11} alt="dontbyram"/>

                  </div>
                  <div className="">
                  <img className="w-full h-full object-cover object-top" src={makeupwork12} alt="dontbyram"/>

                  </div>
                  <div className="">
                  <img className="w-full h-full object-cover object-top" src={makeupwork13} alt="dontbyram"/>

                  </div>
                  <div className="">
                  <img className="w-full h-full object-cover object-top" src={makeupwork10} alt="dontbyram"/>

                  </div>
                  <div className="row-span-2 row-start-2 col-start-2">
                  <img className="w-full h-full object-cover object-top" src={makeupwork9} alt="dontbyram"/>

                  </div>
                  
                </div>
              </div>
              :
              <div className="w-full h-[90%] flex gap-1 overflow-x-scroll overflow-y-scroll">
                <div className="w-full min-w-full h-full grid gap-2 grid-cols-4 grid-rows-3">
                  <div className="row-span-2 col-span-2 row-start-1 col-start-1">
                  <video key={runwayvid1} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={runwayvid1} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3">
                  <img className="w-full h-full object-cover object-top" src={runwaywork5} alt="dontbyram"/>

                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3 col-start-2">
                  <img className="w-full h-full object-cover object-top" src={runwaywork6} alt="dontbyram"/>

                  </div>
                  <div className=" row-span-1 col-span-2 row-start-1 col-start-3">
                  <img className="w-full h-full object-cover object-top" src={runwaywork4} alt="dontbyram"/>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-2 col-start-3">
                  <img className="w-full h-full object-cover object-top" src={runwaywork1} alt="dontbyram"/>
                  </div>
                  <div className=" row-span-1 col-span-1 row-start-3 col-start-3">
                  <video key={runwaywayvid2} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={runwaywayvid2} type="video/mp4"/>
                      Video Format Not supported
                    </video>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-2 col-start-4">
                  <img className="w-full h-full object-cover object-top" src={runwaywork2} alt="dontbyram"/>

                  </div>
                  <div className="row-span-1 col-span-1 row-start-3 col-start-4">
                
                  <video key={runwaywayvid3} loop muted autoPlay className={`w-full h-full object-cover transition-all duration-300`}>
                      <source src={runwaywayvid3} type="video/mp4"/>
                      Video Format Not supported
                    </video>
                  </div>
                </div>
              </div>
            }
            <div className="absolute z-20 bottom-0 w-full h-[10%] flex items-center justify-end px-10">
              <div className="w-fit p-3 h-fit flex items-center justify-center gap-3">
                <span className="uppercase font-arch font-thin text-white tracking-wider">{activeWork === "runway" ? "no scroll" : 'scroll'}</span>
                <div className={`w-[100px] h-[20px] flex items-center ${activeWork === "runway" ? "justify-end" : "justify-start"}`}>
                  <div className={`w-[40px] h-0 border transition-all duration-200 ${activeWork === "runway" ? "" : "animate-scroll"}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={5}
        speed={0.8}
        style={{
          zIndex: 15,
        }}
      >
        <div className="w-full h-full flex flex-col justify-center gap-20">
          <div className="w-full h-[25%] flex items-center justify-end">
            <h1 className="text-white font-arch-b uppercase text-[300px] translate-x-32">bolder</h1>
          </div>
          <div className="w-full h-[50%] trainTranslate overflow-hidden">
            <div className={`h-full w-fit transition-all duration-75 flex`} style={{
              transform: `translateX(-${trainTranslateX}px)`
            }}>
              {faceCardTrainImages.map((image, index) => (
                <FaceCardTrainImagesComponent 
                  key={image.id}
                  index={index}
                  {...image}
                />
              ))}
              {faceCardTrainImages.map((image, index) => (
                <FaceCardTrainImagesComponent 
                  key={image.id}
                  index={index}
                  {...image}
                />
              ))}
              {faceCardTrainImages.map((image, index) => (
                <FaceCardTrainImagesComponent 
                  key={image.id}
                  index={index}
                  {...image}
                />
              ))}
              {faceCardTrainImages.map((image, index) => (
                <FaceCardTrainImagesComponent 
                  key={image.id}
                  index={index}
                  {...image}
                />
              ))}
              {faceCardTrainImages.map((image, index) => (
                <FaceCardTrainImagesComponent 
                  key={image.id}
                  index={index}
                  {...image}
                />
              ))}
              {faceCardTrainImages.map((image, index) => (
                <FaceCardTrainImagesComponent 
                  key={image.id}
                  index={index}
                  {...image}
                />
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer 
        offset={6.3}
        style={{
          zIndex: 15,
          width: "fit-content",
          height: "fit-content",
          left: "40%"
        }}
      >
        <div className="w-fit h-fit p-10">
          <p className="text-white text-[25px] font-os font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius facere possimus ullam molestias quo magnam, voluptatem amet facilis architecto sunt id distinctio commodi, laboriosam aspernatur quae maxime omnis sit doloremque.
            Consectetur volup tatum autem ab magni illo eum, itaque eaque culpa perspiciatis nemo fuga laudantium cumque architecto inventore quisquam id est quibusdam dolor soluta assumenda fugiat doloremque!
          </p>
        </div>
      </ParallaxLayer>


      <ParallaxLayer
        offset={7}
        speed={0.5}
        style={{
          zIndex: 15,
          width: "30%",
        }}
      >
        <div className="w-full h-[200vh] -translate-y-[500px] flex items-center justify-center">
          <div className="w-full h-full relative">
            <video loop muted autoPlay className={`absolute z-0 w-full h-full object-cover transition-all duration-300`}>
              <source src={processVideo2} type="video/mp4"/>
              Video Format Not supported
            </video>
            <div className="absolute z-10 w-full h-full bg-gradient-to-b from-black from-5% to-95% via-transparent to-black">

            </div>
            <div className="absolute z-20 w-full h-full bg-gradient-to-l from-black from-1% to-transparent">

            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={7}
        speed={2}
        style={{
          zIndex: 15,
          width: "70%",
          left: "30%"
        }}
      >
        <div className="w-full h-full flex justify-center">
          <div className="w-[80%] h-full relative flex items-center justify-center pb-40 pr-72">
            <img className="w-[500px] h-[600px] absolute z-50 border-[10px] object-cover" alt="Ram doing makeup" src={processMain1}/>
            <img className="w-[500px] h-[600px] absolute z-40 border-[8px] top-[90px] left-[150px] object-cover" alt="Ram doing makeup" src={processMain4}/>
            <img className="w-[500px] h-[600px] absolute z-30 border-[6px] top-[150px] left-[220px] object-cover" alt="Ram doing makeup" src={processMain3}/>
            <img className="w-[500px] h-[600px] absolute z-20 border-[4px] top-[200px] left-[280px] object-cover" alt="Ram doing makeup" src={processMain5}/>
            <img className="w-[500px] h-[600px] absolute z-10 border-[2px] top-[250px] left-[340px] object-cover" alt="Ram doing makeup" src={processMain2}/>
          </div>
        </div> 
      </ParallaxLayer>

      <ParallaxLayer
        offset={8}
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
        offset={9}
        speed={0.5}
        style={{
          zIndex: 15
        }}
      >
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-1/4 flex items-center justify-center uppercase font-arch-b text-[150px] text-[rgb(16,0,40)]">
            makeupbyram
          </div>
          <div className="w-full h-1/4 flex items-center justify-center uppercase font-arch-b text-[150px] text-[rgb(44,0,91)]">
            makeupbyram
          </div>
          <div className="w-full h-1/4 flex items-center justify-center uppercase font-arch-b text-[150px] text-[#beadfa]">
            makeupbyram
          </div>
          <div className="w-full h-1/4 flex items-center justify-center uppercase font-arch-b text-[150px] text-white">
            makeupbyram
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={10}
        style={{
          zIndex: 15,
          width: "50%",
        }}
      >
        <div className="w-full h-full flex items-center">
          <div className="w-full h-full">
            <div className="w-full h-full grid grid-rows-4 grid-cols-3 skew-x-12 relative">
              <div className="w-full h-full absolute z-10 bg-gradient-to-b from-black from-[3]%] via-transparent to-black to-[98%]">
              </div>
              <div className="w-full h-full absolute z-10 bg-gradient-to-r from-black via-transparent to-black to-[95%]">
              </div>
              <div className="col-span-1 col-start-1 row-span-1 flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={train1} alt="Ram doing makeup"/>
              </div>
              <div className="col-span-1 col-start-1 row-span-2 flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={detailsFeatured1} alt="Ram doing makeup"/>
              </div>
              <div className="col-span-1 col-start-1 row-span-1 flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={detailsFeatured2} alt="Ram doing makeup"/>
              </div>
              <div className="row-start-1 col-start-2 row-span-2 flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={train3} alt="Ram doing makeup"/>
              </div>
              <div className="row-span-2 row-start-3 col-start-2 flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={featuredImage2} alt="Ram doing makeup"/>
              </div>
              <div className="row-start-1 row-span-3 col-start-3 flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={featuredCoverBG} alt="Ram doing makeup"/>
              </div>
              <div className="flex items-center justify-center">
                <img className="w-[98%] h-[98%] object-cover" src={train4} alt="Ram doing makeup"/>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={10}
        speed={1}
        style={{
          zIndex: 15,
          width: "50%",
          left: "50%",
        }}
      >
        <div className="w-full h-full relative flex items-center justify-center">
          <Footer/>
          <div className="w-[85%] h-[70%] border-2 rounded-[100px] relative flex flex-col items-center pt-10">
            <div className="absolute -top-10 left-0 right-0 mx-auto bg-black w-fit h-fit p-2 px-5">
              <span className="text-white font-font-paris text-[40px]">One last step to an amazing look</span>
            </div>
            <div className="w-2/5 h-[10%] border rounded-full flex items-center justify-evenly">
                <input className="radio" type="radio" name="contact" value="inquiry" id="inq" checked={contact === "inquiry"} onChange={onContactChange}/>
                <label className="text-white font-os font-light text-[15px]" for="inq">Inquiry</label>
                <input className="radio" type="radio" name="contact" value="appointment" id="app" checked={contact === "appointment"} onChange={onContactChange}/>
                <label className="text-white font-os font-light text-[15px]" for="app">Appointment</label>
            </div>
            <div className="w-full h-[70%] translate-y-2 border-y-[0.5px]">
              <form className="w-full h-full flex flex-col">
                <div className="w-full h-1/3 flex flex-col border-b-[0.5px]">
                  <div className="w-full h-1/3 border-b-[0.25px] flex items-center pl-5">
                    <label className="text-white w-[10%] flex items-center justify-center text-[15px] font-arch-b uppercase">Name</label>
                    <input type="text" className="w-[90%] h-full bg-black text-[15px] font-arch-b uppercase px-3 text-purple-950 outline-none  placeholder:text-gray-400 placeholder:opacity-25" placeholder="Enter your Full Name"/>
                  </div>
                  <div className="w-full h-1/3 border-b-[0.25px] flex items-center pl-5">
                    <label className="text-white w-[10%] flex items-center justify-center text-[15px] font-arch-b uppercase">Email</label>
                    <input type="email" className="w-[90%] h-full bg-black text-[15px] font-arch-b uppercase px-3 text-purple-300 outline-none  placeholder:text-gray-400 placeholder:opacity-25" placeholder="Enter your Email"/>
                  </div>
                  <div className="w-full h-1/3 flex items-center pl-5">
                    <label className="text-white w-[10%] flex items-center justify-center text-[15px] font-arch-b uppercase">Mobile</label>
                    <input type="text" className="w-[90%] h-full bg-black text-[15px] font-arch-b uppercase px-3 text-purple-50 outline-none  placeholder:text-gray-400 placeholder:opacity-25" placeholder="Enter your Phone Number"/>
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
                      <div className="w-full h-[85%] bg-blue-500">
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
                          <input id="1" type="radio" className="radio"/>
                          <label for="1" className="font-arch-b uppercase text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio"/>
                          <label for="1" className="font-arch-b uppercase text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio"/>
                          <label for="1" className="font-arch-b uppercase text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio"/>
                          <label for="1" className="font-arch-b uppercase text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio"/>
                          <label for="1" className="font-arch-b uppercase text-[13px] text-white">face to face private</label>
                        </div>
                        <div className="w-1/2 h-1/3 flex items-center justify-center gap-5">
                          <input id="1" type="radio" className="radio"/>
                          <label for="1" className="font-arch-b uppercase text-[13px] text-white">face to face private</label>
                        </div>
                      </div>
                      <div className="w-[30%] h-full flex flex-col border-l-[0.5px]">
                        <div className="w-full h-1/3 bg-black border-b-[0.5px] cursor-pointer select-none">
                          <div className="w-full h-full flex items-center justify-evenly hover:opacity-75 active:opacity-50">
                            <span className="font-arch-b text-white uppercase text-[20px]">Choose Day</span>
                            <FontAwesomeIcon icon={faChevronDown} size="lg" color="white"/>
                          </div>
                        </div>
                        <div className="w-full h-1/3 bg-black border-b-[0.5px] cursor-pointer select-none">
                          <div className="w-full h-full flex items-center justify-evenly hover:opacity-75 active:opacity-50">
                            <span className="font-arch-b text-white uppercase text-[20px]">Choose time</span>
                            <FontAwesomeIcon icon={faChevronDown} size="lg" color="white"/>
                          </div>
                        </div>
                        <div className="w-full h-1/3 bg-black cursor-pointer select-none">
                          <div className="w-full h-full flex items-center justify-evenly hover:opacity-75 active:opacity-50">
                            <span className="font-arch-b text-white uppercase text-[20px]">Choose Day</span>
                            <FontAwesomeIcon icon={faChevronDown} size="lg" color="white"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </form>
            </div>
            <div className="absolute left-0 right-0 bottom-5 rounded-full mx-auto w-[30%] h-[10%] bg-purple-950 flex items-center justify-center cursor-pointer hover:opacity-75 active:opacity-50 select-none">
              <span className="uppercase font-arch-b text-[14px] text-white">{contact === "inquiry" ? "make inquiry" : "make appointment"}</span>
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
    service: "shoot",
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

const leftFaceCardImages = [
  {
    id: 1,
    source: faceCardImageRaw1,
    description: "Ram doing makeup",
  },
  {
    id: 2,
    source: faceCardImageRaw2,
    description: "Ram doing makeup",
  },
  {
    id: 3,
    source: faceCardImageRaw3,
    description: "Ram doing makeup",
  },
  {
    id: 4,
    source: faceCardImageRaw4,
    description: "Ram doing makeup",
  },
]

const rightFaceCardImages = [
  {
    id: 1,
    source: faceCardImageRaw5,
    description: "Ram doing makeup",
  },
  {
    id: 2,
    source: faceCardImageRaw6,
    description: "Ram doing makeup",
  },
  {
    id: 3,
    source: faceCardImageRaw7,
    description: "Ram doing makeup",
  },
  {
    id: 4,
    source: faceCardImageRaw8,
    description: "Ram doing makeup",
  },
]

const faceCardTrainImages = [
  {
    id: 1,
    source: train1,
    alt: "Make up by Ram"
  },
  {
    id: 2,
    source: train2,
    alt: "Make up by Ram"
  },
  {
    id: 3,
    source: train3,
    alt: "Make up by Ram"
  },
  {
    id: 4,
    source: train4,
    alt: "Make up by Ram"
  },
  {
    id: 5,
    source: train5,
    alt: "Make up by Ram"
  },
  {
    id: 6,
    source: train6,
    alt: "Make up by Ram"
  },
  {
    id: 7,
    source: train7,
    alt: "Make up by Ram"
  },
  {
    id: 8,
    source: train8,
    alt: "Make up by Ram"
  },
  {
    id: 9,
    source: train9,
    alt: "Make up by Ram"
  },
  {
    id: 10,
    source: train10,
    alt: "Make up by Ram"
  },
  {
    id: 11,
    source: train11,
    alt: "Make up by Ram"
  },
  {
    id: 12,
    source: train12,
    alt: "Make up by Ram"
  },
  {
    id: 13,
    source: train13,
    alt: "Make up by Ram"
  },
  {
    id: 14,
    source: train14,
    alt: "Make up by Ram"
  },
  {
    id: 15,
    source: train15,
    alt: "Make up by Ram"
  },
  {
    id: 16,
    source: train16,
    alt: "Make up by Ram"
  },
  {
    id: 17,
    source: train17,
    alt: "Make up by Ram"
  },
  {
    id: 18,
    source: train18,
    alt: "Make up by Ram"
  },
  {
    id: 19,
    source: train19,
    alt: "Make up by Ram"
  },
  {
    id: 20,
    source: train20,
    alt: "Make up by Ram"
  },
  {
    id: 21,
    source: train21,
    alt: "Make up by Ram"
  },
]
