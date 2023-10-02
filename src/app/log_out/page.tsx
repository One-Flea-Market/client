"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/logout.json"
import { useEffect } from "react"
import axios from "axios"
const Logout = () => {
  useEffect(() => {
    void (async () => {
      const { result, message } = await (await axios.post("/logout")).data
      if (result) window.location.replace("/")
      else alert(message)
    })()
  }, [])
  return (
    <div className="z-50 bg-white w-full h-full absolute top-0 right-0 text-center flex justify-center items-center">
      <Lottie loop animationData={lottieJson} play className="w-[50%] h-[50%]" />
    </div>
  )
}

export default Logout
