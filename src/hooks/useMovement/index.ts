"use clent"
import { useEffect } from "react"
const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault()
  e.returnValue = "" //Chrome에서 동작하도록; deprecated
}

const useMovement = () => {
  //   const preventGoBack = () => {
  //     history.pushState(null, "", location.href)
  //   }
  useEffect(() => {
    ;(() => {
      window.addEventListener("beforeunload", preventClose)
    })()

    // history.pushState(null, "", location.href)
    // window.addEventListener("popstate", preventGoBack)

    return () => {
      window.removeEventListener("beforeunload", preventClose)
      //   window.removeEventListener("popstate", preventGoBack)
    }
  }, [])
}
export default useMovement
