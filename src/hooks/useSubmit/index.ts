import axios from "axios"
import { useState } from "react"

const useSubmit = (url: string) => {
  const [loading, setLoading] = useState(false)
  const valid = async (data: Record<string, string>) => {
    try {
      // throw new Error("error")
      setLoading(true)
      const res = await (
        await axios.post("https://jsonplaceholder.typicode.com/posts", { ...data })
      ).data
      console.log(res)
      //json place holder대신 props로받은 url넣기
      // if (res.success) {
      //   alert(res.result)
      //   window.location.replace("/")
      // }
      //  else {alert(res.result); setLoading(false)}
    } catch (error) {
      alert("다시 시도 해주세요.")
      setLoading(false)
    }
  }
  return { loading, valid }
}

export default useSubmit
