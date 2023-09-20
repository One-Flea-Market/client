"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/logout.json"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const Logout = () => {
  const { replace } = useRouter()
  useEffect(() => {
    //서버에서 세션id 지우는 요청보내는 로직 필요
    replace("/")
  }, [replace])
  return (
    <div className="z-50 bg-white w-full h-full absolute top-0 right-0 text-center flex justify-center items-center">
      <Lottie loop animationData={lottieJson} play className="w-[50%] h-[50%]" />
    </div>
  )
}

export default Logout
