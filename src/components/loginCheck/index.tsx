"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useLayoutEffect } from "react"
const LoginCheck = ({ children }: child) => {
  const { replace, refresh } = useRouter()
  useLayoutEffect(() => {
    void (async () => {
      try {
        const data = await (await axios("/check")).data
        if (!data.login) replace("/log-in")
      } catch {
        refresh()
      }
    })()
  }, [replace, refresh])
  return <>{children}</>
}
export default LoginCheck
