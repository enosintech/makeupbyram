import { useEffect, useState } from 'react'

const Clock = () => {

    const [ time, setTime ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Kuala_Lumpur"}))
        }, 1000);

        return () => clearInterval(interval);
    }, [])

  return (
    <div className="absolute bottom-10 right-5 sm:right-7 lg:right-10 xl:right-14 flex flex-col items-end gap-3 text-white text-md sm:text-lg xl:text-xl">
        <p className="font-nohemiBold">LOCAL TIME</p>
        <p className="font-nohemiLight">{time} KUL</p>
    </div>
  )
}

export default Clock;