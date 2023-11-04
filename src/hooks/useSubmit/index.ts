import { useState } from "react"
import { setCookie } from "cookies-next"
import { v1 } from "uuid"
const useSubmit = ({ base, after, more, type = "post" }: submitData) => {
  const time = new Date()
  const [loading, setLoading] = useState(false)
  const valid = async (data: any) => {
    // let formData = new FormData()
    // const deceline =
    //   (base.includes("modify") || base.includes("registration")) && !!more.list.length
    const moudule = {
      ...data,
      ...more,
      date: `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
      // list: more?.list ? formData : null
    }
    if (more && more.list && !more.list.length) {
      alert("모든 양식을 선택 해주세요.")
      return
    }

    if (more && more.status === "not") {
      alert("모든 양식을 선택 해주세요.")
      return
    }
    // if (deceline) {
    //   for (let i = 0; i < more.list.length; i++) {
    //     formData.append("file", more.list[i])
    //   }
    //   formData.append("product", JSON.stringify(moudule))
    // }

    if (base.includes("/login")) delete moudule["date"]
    try {
      setLoading(true)
      const res = await (
        await fetch(base, {
          headers: {
            "Content-Type":
              //  deceline ? "multipart/form-data; boundary=" + v1() :
              "application/json"
          },
          credentials: "include",
          method: type,
          body:
            // deceline ? formData :
            JSON.stringify(moudule)
          //withCredentials: true (axios전용)
        })
      ).json()
      if (res.result) {
        if (base.includes("/login")) {
          setCookie("token", res.token, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 })
        }
        window.location.replace(!after ? "/" : after)
      } else {
        res.message && alert(res.message)
        setLoading(false)
      }
      console.log(res)
    } catch (error) {
      alert("다시 시도 해주세요.")
      setLoading(false)
    }
  }
  return { loading, valid }
}

export default useSubmit
