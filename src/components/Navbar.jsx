import { useGSAP } from "@gsap/react";

import { noTriggerFromAnimations, triggerToAnimations } from "../utils/animations";

const Navbar = () => {

  useGSAP(() => {
    noTriggerFromAnimations("#fromRight", {
      x: "200%",
      duration: 1,
      delay: 5,
      ease: "power2.inOut",
    })

    triggerToAnimations("#yieldLeft", {
      x: "-150%"
    }, {
      trigger: "#aboutAnimateTrigger", 
      scrub :true,
    })
  }, [])

  return (
    <nav className="fixed top-0 w-full h-[90px] lg:h-[120px] xl:h-[150px] 2xl:h-[180px] pl-5 xl:pr-5 pr-1 text-white flex items-start justify-between z-10">
        <div id="fromRight"><h1 id="yieldLeft" className="font-nohemiBlack text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] 2xl:text-[180px] relative">MAKEUPBY<span className="text-purple-950">RAM</span></h1></div>
    </nav>
  )
}

export default Navbar;
