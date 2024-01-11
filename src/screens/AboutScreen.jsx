import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer.jsx";

import AboutRamCover from "../assets/images/aboutRamCover.jpg";
import AboutRam1 from "../assets/images/aboutRam1.jpg";
import AboutRam2 from "../assets/images/aboutRam2.jpg";
import AboutRam3 from "../assets/images/aboutRam3.jpg";
import AboutRam4 from "../assets/images/aboutRam4.jpg";
import AboutRam5 from "../assets/images/aboutRam5.jpg";
import AboutRam6 from "../assets/images/aboutRam6.jpg";

const ColorPalleteComponent = (props) => {
  return (
    <div
      className={`relative w-1/6 h-full`}
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
    </div>
  )
}

function AboutScreen() {
  const paraRef =  useRef(null);

  return (
    <Parallax 
      pages={2}
      ref={paraRef}
      className="parallax-2"
    >
      <ParallaxLayer 
        offset={0}
        factor={2}
        style={{
          backgroundColor: "black",
          zIndex: 10,
        }}
      >
       <Footer />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        style={{
          zIndex: 15,
          height: "100dvh",
          width: "100dvw",
        }}
      >
        <div className="w-full h-full relative">
          <img src={AboutRamCover} className="absolute z-0 w-full h-full object-right md:object-center object-cover" alt="about ram" />
          <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer 
        offset={0.9}
        speed={1}
        style={{
          zIndex:15,
          height: "fit-content",
        }}
        >
        <div className="w-full h-fit pl-5 md:pl-10 xl:pl-20">
          <h1 className="text-white font-font-paris text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px]">Hi, my name is Ramsha</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer 
        offset={1}
        style={{
          zIndex: 15,
        }}  
        >
        <div className="absolute top-0 w-full h-[10%] flex items-end justify-center">
          <span className="font-arch-b text-[15px] text-white uppercase">about me</span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.2}
        style={{
          zIndex: 15,
          width: window.innerWidth < 1024 ? "100%" : "50%",
          height: window.innerWidth < 1024 ? "50dvh" : "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end"
        }}
      >
        <div className="w-full h-[90%] relative">
          <div className="w-[200px] h-0 border absolute lg:block hidden translate-x-10">
            <h1 className="font-arch-b text-gray-400 opacity-35 uppercase text-[12px] mt-1">Kuala Lumpur</h1>
          </div>
          <div className="w-[100px] s:w-[120px] sm:w-[150px] md:w-[180px] h-0 border absolute lg:hidden block translate-y-[69.5px] sm:translate-y-[87px] md:translate-y-[130px] sm:translate-x-48 translate-x-24 s:translate-x-[150px]">
            <h1 className="text-gray-400 opacity-35 uppercase font-arch-b text-[8px] sm:text-[10px] md:text-[15px] mt-1">kl</h1>
          </div>
          <div className="hex lg:left-20">
            <div className="hex-background">
              <img src={AboutRam6} className="" alt="About Ram"/>
            </div>
          </div>
          <div className="hex lg:-top-[107px] lg:left-[268px]">
            <div className="hex-background">
              <img src={AboutRam5} className="" alt="About Ram"/>
            </div>
          </div>
          <div className="w-[200px] h-0 border lg:block hidden absolute lg:translate-x-[182px] lg:translate-y-20 lg:-rotate-[59deg]">
            <h1 className="font-arch-b text-gray-400 opacity-35 uppercase text-[12px] mt-1">Penang</h1>
          </div>
          <div className="w-[100px] s:w-[120px] sm:w-[150px] md:w-[180px] h-0 border absolute lg:hidden block translate-x-24 translate-y-[70px] sm:translate-y-[87px] md:translate-y-[130px] sm:translate-x-48 s:translate-x-[150px]">
            <h1 className="font-arch-b text-gray-400 opacity-35 uppercase text-[8px] sm:text-[10px] md:text-[15px] mt-1">Pn</h1>
          </div>

          <div className="hex lg:-top-[106px] lg:left-[268px]">
            <div className="hex-background">
              <img src={AboutRam2} className="" alt="About Ram"/>
            </div>
          </div>
          <div className="hex lg:-top-[215px] lg:left-[457px] overflow-visible">
            <div className="hex-background">
              <img src={AboutRam2} className="" alt="About Ram"/>
            </div>
          </div>
          <div className="w-[200px] lg:block hidden xl:w-[120px] 2xl:w-[200px] h-0 border absolute bottom-24 lg:-right-20 xl:-right-10">
            <h1 className="font-arch-b text-gray-400 opacity-35 lg:text-left xl:text-right uppercase text-[12px] mt-1">Karachi</h1>
          </div>
          <div className="w-[100px] s:w-[120px] sm:w-[150px] md:w-[180px] h-0 border absolute lg:hidden block translate-x-24 translate-y-[67px] sm:translate-y-[87px] md:translate-y-[130px] sm:translate-x-48 s:translate-x-[150px]">
            <h1 className="font-arch-b text-gray-400 opacity-35 uppercase text-[8px] sm:text-[10px] md:text-[15px] mt-1">Kr</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          zIndex: 15,
          width: window.innerWidth < 1024 ? "100%" : "50%",
          height: window.innerWidth < 1024 ? "50dvh" : "100dvh",
          left: window.innerWidth < 1024 ? "0" : "50%",
          top: window.innerWidth < 1024 ? "50dvh" : "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end"
        }}
      >
        <div className="w-full h-[90%] bg-black lg:bg-transparent -translate-y-10 flex flex-col">
          <div className="w-full h-full flex flex-col">
            <p className="w-full h-[80%] bg-red-500 overflow-scroll text-[10px] sm:pt-4 lg:pt-0 sm:text-[12px] md:text-[14px] flex lg:items-start xl:items-center justify-center lg:translate-y-10 lg:translate-x-10 xl:translate-y-0 xl:translate-x-0 lg:text-[13px] xl:text-[15px] 2xl:text-[18px] px-10 md:px-20 font-arch text-justify text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quam cum magni. Itaque laboriosam asperiores ullam, modi, explicabo ducimus aliquam voluptas dolor molestias harum blanditiis, quis aperiam? Molestiae, inventore? Vero.
Nulla nisi dolore atque magni corporis voluptate nobis culpa sed nesciunt officia excepturi architecto debitis, qui accusantium laboriosam beatae libero dolorem! Cumque eum dolor, libero adipisci magni ratione sequi debitis!
Nihil soluta, et, cumque tenetur illum obcaecati numquam id illo a quia eius, atque explicabo ratione deserunt placeat necessitatibus totam ad fugiat non praesentium aliquam sint. Enim vitae sed culpa!
Dignissimos qui sequi officiis natus, quae alias recusandae optio ipsam praesentium harum autem quisquam quidem quaerat. Quaerat sint expedita officiis harum, ad perspiciatis, aliquid beatae ab vitae dicta nulla rerum?
Soluta, accusantium, explicabo magnam dolore qui cum error assumenda similique eligendi quibusdam, libero quia rerum vero deserunt dicta! Voluptatibus fugit maxime dicta quaerat aspernatur facere unde in doloribus voluptates. Culpa?
            </p>
            <div className="w-full h-[20%] flex items-center justify-end">
              <div className="lg:w-[35%] w-[40%] h-[40%] sm:w-[20%] md:w-[25%] lg:h-[35%] md:h-[50%] sm:h-[50%] flex"> 
                {colors.map((color, index) => (
                  <ColorPalleteComponent 
                    key={color.id}
                    index={index}
                    {...color}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full h-[20%] flex items-center justify-center">
            <div className="w-[40%] lg:w-[30%] h-[80%] lg:h-[40%] bg-purple-950 rounded-full flex items-center justify-center select-none cursor-pointer hover:opacity-75 active:opacity-50">
              <span className="text-[15px] font-arch-b uppercase text-white">reach out</span>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default AboutScreen;

const colors = [
  {
    id: 1,
    backgroundColor: "#3b0764",
  },
  {
    id: 2,
    backgroundColor: "#6b21a8",
  },
  {
    id: 3,
    backgroundColor: "#9333ea",
  },
  {
    id: 4,
    backgroundColor: "#c084fc",
  },
  {
    id: 5,
    backgroundColor: "#e9d5ff",
  },
  {
    id: 6,
    backgroundColor: "#f3e8ff"
  },
]

const imageCount = [
  {
    count: 1,
  },
  {
    count: 2,
  },
  {
    count: 3,
  },
  {
    count: 4,
  },
]
