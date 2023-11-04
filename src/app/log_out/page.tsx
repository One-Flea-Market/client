"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/logout.json"
import { useEffect } from "react"
import { deleteCookie } from "cookies-next"
const Logout = () => {
  useEffect(() => {
    try {
      deleteCookie("token")
      window.location.replace("/")
    } catch {
      window.location.reload()
    }
  }, [])
  return (
    <div className="z-50 bg-white w-full h-full absolute top-0 right-0 text-center flex justify-center items-center">
      <Lottie loop animationData={lottieJson} play className="w-[50%] h-[50%]" />
    </div>
  )
}

export default Logout
