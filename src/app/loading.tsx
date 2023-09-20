"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/loading.json"

const ErrorPage = () => {
  return (
    <div className="z-50 bg-white w-full h-full absolute top-0 right-0 text-center flex justify-center items-center">
      <Lottie loop animationData={lottieJson} play className="w-[70%] h-[70%]" />
    </div>
  )
}

export default ErrorPage
