import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectAppointmentButtonObserver, selectLogoObserver, selectScrollTop, selectBurgerActive, setBurgerActive } from "../slices/navSlice";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

import burgerMenu from "./assets/icons/burgerMenu.png";
import burgerMinus from "./assets/icons/burgerMinus.png";
import logo from "./assets/favicon/ramsfav.png";

function App() {

  const location = useLocation();
  const dispatch = useDispatch();
  const scrollTop = useSelector(selectScrollTop);
  const logoObserver = useSelector(selectLogoObserver);
  const burgerActive = useSelector(selectBurgerActive);
  const appointmentButtonObserver = useSelector(selectAppointmentButtonObserver);

  const [ activeLocation, setActiveLocation ] = useState(location.pathname);

  useEffect(() => {
    setActiveLocation(location.pathname)
  }, [location])

  return (
    <div className="flex-1">
      <div className={`fixed z-50 bg-transparent w-full h-[60px] flex items-center justify-between px-5 sm:px-12 transition-all duration-400`}>
        <div className={`uppercase font-bold text-[16px] transition-all duration-100 ${activeLocation === "/" ? logoObserver ? "opacity-100" : "opacity-0" : "opacity-100"}`}>
          {
            activeLocation === "/" 
            ?
             appointmentButtonObserver === false 
            ?
            <div className="text-white font-arch-b">
              <span>makeupby</span>
              <span className={`text-purple-950 transition-all duration-100`}>ram</span>
            </div>
            :
            <div className="w-[20px] h-[20px] rounded-full border">
              <img className="w-full h-full" src={logo} alt="makee up by ram logo"/>
            </div>
            :
            <div>
              <span className="text-white font-arch-b">makeupby</span>
              <span className={`text-purple-950 font-arch-b transition-all duration-100`}>ram</span>
            </div>
          }
          
          
        </div>
        <div className={`w-fit px-3 uppercase hidden items-center gap-14 md:flex transition-all duration-100 text-white`}>
          <span className={`cursor-pointer hover:opacity-50 active:opacity-25 ${activeLocation === "/" ? "font-bold" : "font-light"}`}><Link to="/">home</Link></span>
          <span className={`cursor-pointer hover:opacity-50 active:opacity-25 ${activeLocation === "/about" ? "font-bold" : "font-light"}`}><Link to="/about">about</Link></span>
        </div>
        <div className="w-fit h-fit relative md:hidden">
          <img className="w-[40px] h-[40px] cursor-pointer hover:opacity-50 invert active:opacity-25 transition-all duration-100" src={!burgerActive ? burgerMenu : burgerMinus } alt="burger menu" onClick={() => {
            dispatch(setBurgerActive(!burgerActive))
          }}/>
          <div className={`absolute w-[100px] ${!burgerActive ? "h-[0px] -translate-y-20" : "h-[150px]"} transition-all duration-100 right-0 text-white flex flex-col`}>
            <div className={`w-full h-1/2 items-center ${activeLocation === "/" ? "font-extrabold" : "font-light"} justify-center uppercase cursor-pointer hover:opacity-50 active:opacity-25 select-none ${!burgerActive ? "hidden" : "flex"}`}><Link to="/">home</Link></div>
            <div className="w-full border-2 border-white"></div>
            <div className={`w-full h-1/2 flex items-center ${activeLocation === "/about" ? "font-extrabold" : "font-light"} justify-center uppercase cursor-pointer hover:opacity-50 active:opacity-25 select-none ${!burgerActive ? "hidden" : "flex"}`}><Link to="/about">about</Link></div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/about" element={<AboutScreen />}/>
      </Routes>       
    </div>
  )
}

export default App;
