const VidLoadingPrompt = () => {
  return (
    <div className="flex flex-col items-center text-center gap-y-2 h-fit">
        <span className="vidLoader"></span>
        <p className="mt-10 font-black tracking-tight text-white text-[14px] sm:text-[16px]">LOADING VIDEO</p>
        <p className="text-white font-light tracking-tight text-[8px] sm:text-[12px]">(TURN OFF LOW POWER MODE)</p>
    </div>
  )
}

export default VidLoadingPrompt;
