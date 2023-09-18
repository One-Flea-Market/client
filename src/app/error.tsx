"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/network-error.json"

const ErrorPage = () => {
  return <Lottie loop animationData={lottieJson} play className="w-full h-[70vh]" />
}

export default ErrorPage
