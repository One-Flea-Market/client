import { signAuth, signState } from "@/atoms/signAuth"
import { useRef } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
const EmailAuth = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [auth, setAuth] = useRecoilState(signAuth)
  const setState = useSetRecoilState(signState)
  return (
    <div className=" flex [&>*]:rounded-xl mb-1 -mt-5 md:-mt-3 -ml-5 md:ml-0 [&>*]:outline-none">
      <input
        type="text"
        className="md:text-lg  text-sm w-[82%] md:w-full my-2 h-10 p-2 border-4 border-blue-300"
        ref={ref}
        placeholder="인증번호"
      />
      <input
        type="button"
        value="confirm"
        className="ml-2 text-white bg-blue-600 p-2 h-10 mt-2 hover:opacity-70 text-xxs md:text-base"
        onClick={() => {
          if (ref?.current?.value === auth) {
            alert("인증이 완료 되었습니다.")
            setAuth("")
            setState(state => ({ ...state, authState: false, email: true }))
          } else alert("인증번호를 다시입력해주세요.")
        }}
      />
    </div>
  )
}
export default EmailAuth
