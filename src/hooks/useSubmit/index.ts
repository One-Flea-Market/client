import axios from "axios"
import { useState } from "react"

interface submitData {
  base: string
  after?: string
  more?: any
  type?: "post" | "patch" | "delete" | "put"
}

const useSubmit = ({ base, after, more, type = "post" }: submitData) => {
  const time = new Date()
  const [loading, setLoading] = useState(false)
  const valid = async (data: Record<string, string>) => {
    const moudule = {
      ...data,
      ...more,
      date: `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
    }
    if (base === "/login") delete moudule["date"]
    try {
      setLoading(true)
      const res = await (
        await axios[type](
          type === "post"
            ? "https://jsonplaceholder.typicode.com/posts"
            : "https://jsonplaceholder.typicode.com/posts/1",
          moudule
        )
      ).data
      // 추가 데이터있을떄 결과값 확인하기
      console.log(res)
      //json place holder대신 props로받은 base넣기
      // if (res.result) {
      //   window.location.replace(after?"/":after)
      // }
      //  else {
      // res.message && alert(res.message)
      //  setLoading(false)
      // }
    } catch (error) {
      alert("다시 시도 해주세요.")
      setLoading(false)
    }
  }
  return { loading, valid }
}

export default useSubmit
