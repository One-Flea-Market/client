"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/network-error.json"

const ErrorPage = () => {
  return <Lottie loop animationData={lottieJson} play style={{ width: 900, height: 500 }} />
}

export default ErrorPage
