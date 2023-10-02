"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { ReactNode, useLayoutEffect } from "react"
const LoginCheck = ({ children }: { children: ReactNode }) => {
  const { replace } = useRouter()
  useLayoutEffect(() => {
    void (async () => {
      // const data = await(await axios("/check")).data
      const data = { login: true }
      if (!data.login) replace("/login")
    })()
  }, [replace])
  return <>{children}</>
}
export default LoginCheck
