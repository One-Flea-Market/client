import { signAuth, signState } from "@/atoms/signAuth"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRecoilState, useSetRecoilState } from "recoil"
const AuthButton = ({ plac, watch }: auth) => {
  const { refresh } = useRouter()
  const [state, setState] = useRecoilState(signState)
  const setAuth = useSetRecoilState(signAuth)
  return (
    <div className="ml-2 ">
      <input
        type="button"
        value={plac === "email" ? "인증하기" : "중복확인"}
        className="bg-blue-600 text-white rounded-lg hover:opacity-70 text-xxs md:text-base w-full h-[70%] px-2 mt-1"
        disabled={state[plac]}
        onClick={async e => {
          if (e.currentTarget.value === "인증하기") {
            try {
              const res = await (
                await axios.post("/sign-in/email", { email: watch()["email"] })
              ).data
              if (res.result) {
                setAuth(res.auth)
                setState(state => ({ ...state, authState: true }))
              } else alert(res.message)
            } catch {
              refresh()
            }
          } else {
            try {
              const res = await (
                await axios.post("/sign-in/username", { username: watch()["username"] })
              ).data
              alert(res.message)
              if (res.result) setState(state => ({ ...state, username: res.result }))
            } catch {
              refresh()
            }
          }
        }}
      />
    </div>
  )
}

export default AuthButton
