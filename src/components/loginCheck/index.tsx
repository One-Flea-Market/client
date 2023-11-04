"use client"
import { useLayoutEffect } from "react"
import { getCookie } from "cookies-next"
const LoginCheck = ({ children }: child) => {
  useLayoutEffect(() => {
    void (async () => {
      try {
        if (!getCookie("token")) window.location.replace("/log-in")
      } catch {
        window.location.reload()
      }
    })()
  }, [])
  return <>{children}</>
}
export default LoginCheck
