"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/network-error.json"

const SignErrorPage = () => {
  return <Lottie loop animationData={lottieJson} play style={{ width: 800, height: 500 }} />
}

export default SignErrorPage
