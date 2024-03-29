import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  useGSAP(() => {
    gsap.from("#fromRight", {
      x: "200%",
      duration: 1,
      delay: 5,
      ease: "power2.inOut",
    })

    gsap.to("#yieldLeft", {
      x: "-150%",
      scrollTrigger: {
        trigger: "#aboutAnimateTrigger", 
        scrub :true,
      },
    })
  }, [])

  return (
    <nav className="fixed top-0 w-full h-[90px] lg:h-[120px] xl:h-[150px] 2xl:h-[180px] pl-5 xl:pr-5 pr-1 text-white flex items-start justify-between z-10">
        <div id="fromRight"><h1 id="yieldLeft" className="font-nohemiBlack text-[50px] md:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[150px] relative">MAKEUPBY<span className="text-purple-950">RAM</span><span className="text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] absolute top-4 lg:top-5 xl:top-7 2xl:top-10 ml-1">®</span></h1></div>
        <div id="yieldTopRight" className="translate-y-4 items-center justify-center gap-3 flex absolute right-5 lg:right-10 text-black opacity-0">
            <p className=" text-[16px] lg:text-xl font-nohemiRegular translate-y-[2px]">MAKE AN APPOINTMENT</p>
            <FontAwesomeIcon icon={faGlobe} size="lg" color="rgb(59,7,100)" className="animate-spin"/>
        </div>
    </nav>
  )
}

export default Navbar;
