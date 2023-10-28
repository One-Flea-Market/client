import { message, signAuth, signState } from "@/atoms/signAuth"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRecoilState, useSetRecoilState } from "recoil"
const AuthButton = ({ plac, watch }: auth) => {
  const { refresh } = useRouter()
  const [state, setState] = useRecoilState(signState)
  const setAuth = useSetRecoilState(signAuth)
  const setMessage = useSetRecoilState(message)
  return (
    <div className="ml-2 ">
      <input
        type="button"
        value={plac === "email" ? "인증하기" : "중복확인"}
        className="bg-blue-600 text-white rounded-lg hover:opacity-70 text-xxs md:text-base w-full h-[70%] px-2 mt-1"
        disabled={state[plac]}
        onClick={async e => {
          if (e.currentTarget.value === "인증하기") {
            setState(state => ({ ...state, email: true }))
            const email = watch()["email"]
            try {
              const res = await (
                await axios.post(`${process.env.NEXT_PUBLIC_SECRET_URL}/sign-in/email`, { email })
              ).data
              if (res.result) {
                setState(state => ({ ...state, authState: true }))
                setMessage(state => ({ ...state, email: { ...state.email, value: email } }))
                setAuth(res.Auth)
              } else alert(res.message)
            } catch {
              setState(state => ({ ...state, authState: false, email: false }))
              refresh()
            }
          } else {
            const value = watch()["username"]
            if (value.length < 5) return alert("5자이상 입력 해주세요.")
            setState(state => ({ ...state, username: true }))
            try {
              const res = await (
                await axios.post(`${process.env.NEXT_PUBLIC_SECRET_URL}/sign-in/username`, {
                  username: value
                })
              ).data
              if (res.result) {
                setMessage(state => ({
                  ...state,
                  username: { value, message: res.message }
                }))
              } else {
                alert(res.message)
                setState(state => ({ ...state, username: false }))
              }
            } catch {
              refresh()
              setState(state => ({ ...state, username: false }))
            }
          }
        }}
      />
    </div>
  )
}

export default AuthButton
