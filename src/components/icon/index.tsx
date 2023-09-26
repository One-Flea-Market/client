"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
const Icon = ({ url }: { url: string }) => {
  const { push } = useRouter()
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      onClick={() => {
        push(url)
      }}
      whileHover={{
        scale: 0.8,
        rotate: 90,
        transition: { duration: 1, type: "spring" }
      }}
      className="text-white fixed bottom-8 right-8 w-12 aspect-square rounded-full bg-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </motion.svg>
  )
}

export default Icon
