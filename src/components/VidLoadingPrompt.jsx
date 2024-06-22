const VidLoadingPrompt = () => {
  return (
    <div className="flex flex-col items-center text-center gap-y-2 h-fit">
        <span className="vidLoader"></span>
        <p className="text-white font-light tracking-tight text-[8px] sm:text-[12px] mt-10">(IF ON, TURN OFF LOW POWER MODE)</p>
    </div>
  )
}

export default VidLoadingPrompt;
