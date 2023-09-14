"use client"
import Lottie from "react-lottie-player"
import lottieJson from "@/public/404-error.json"

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play style={{ width: 800, height: 500 }} />
}
