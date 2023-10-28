import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const useSubmit = ({ base, after, more, type = "post" }: submitData) => {
  const time = new Date()
  const [loading, setLoading] = useState(false)
  const { replace } = useRouter()
  const valid = async (data: any) => {
    if (more && more.list && !more.list.length) {
      alert("모든 양식을 선택 해주세요.")
      return
    }

    if (more && more.status === "not") {
      alert("모든 양식을 선택 해주세요.")
      return
    }
    const moudule = {
      ...data,
      ...more,
      date: `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
    }
    if (base.includes("/login")) delete moudule["date"]
    try {
      setLoading(true)
      const res = await (await axios[type](base, moudule)).data
      // console.log(await axios[type](base, moudule), moudule)
      if (res.result) replace(!after ? "/" : after)
      else {
        res.message && alert(res.message)
        setLoading(false)
      }
    } catch (error) {
      alert("다시 시도 해주세요.")
      setLoading(false)
      // console.log(base, moudule)
    }
  }
  return { loading, valid }
}

export default useSubmit
