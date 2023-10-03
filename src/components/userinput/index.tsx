"use client"
import { Fragment, useLayoutEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import useSubmit from "@/hooks/useSubmit/index"
import useMovement from "@/hooks/useMovement"
import axios from "axios"
const UserInputComponent = ({
  settingOption,
  pageValue,
  url
}: {
  settingOption: Record<string, string>[]
  pageValue: string
  url: string
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const { replace, refresh } = useRouter()
  const [state, setState] = useState<Record<string, boolean>>({
    email: false,
    authState: false,
    username: false
  })
  const [auth, setAuth] = useState("")
  const { loading, valid } = useSubmit({ base: url })
  const ref = useRef<HTMLInputElement>(null)
  // useLayoutEffect(() => {
  //  if(data && data.login) replace("/")

  // }, [data])
  useMovement()
  return (
    <form className="flex justify-center flex-col" onSubmit={handleSubmit(valid)}>
      <div className="flex flex-col mt-5 w-[60vw]">
        {settingOption.map(item => (
          <Fragment key={item.plac}>
            <div className="w-[110%] md:w-full -ml-5 md:ml-0 [&>*]:mb-3 [&>*]:h-14 flex justify-center">
              <div className="w-full h-[40%]">
                <input
                  type={item.type}
                  className={`outline-none border-4 ${
                    errors[item.plac] ? "border-red-300" : "border-blue-300"
                  }  rounded-xl p-2 md:text-lg w-full text-sm`}
                  placeholder={item.plac}
                  {...register(item.plac, {
                    required: "필수 항목입니다.",
                    disabled: state[item.plac],
                    minLength: {
                      value: 5,
                      message: "최소 5자이상 입력 해주세요."
                    },
                    maxLength: 30,
                    pattern: {
                      value:
                        item.plac === "phone-number"
                          ? /^[0-9]+$/
                          : /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|@|\.]+$/,
                      message: "지원하지 않는 양식입니다."
                    }
                  })}
                />
              </div>
              {(url === "/sign-in" && item.plac === "email") || item.plac === "username" ? (
                <div className="ml-2 ">
                  <input
                    type="button"
                    value={item.plac === "email" ? "인증하기" : "중복확인"}
                    className="bg-blue-600 text-white rounded-lg hover:opacity-70 text-xxs md:text-base w-full h-[70%] px-2 mt-1"
                    disabled={state[item.plac]}
                    onClick={async e => {
                      if (e.currentTarget.value === "인증하기") {
                        try {
                          const res = await (
                            await axios.post("/sign-in/email", { email: watch()["email"] })
                          ).data
                          alert(res.message)
                          if (res.result) {
                            setAuth(res.auth)
                            setState(state => ({ ...state, authState: true }))
                          }
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
              ) : null}
            </div>
            {item.plac === "email" && state.authState && (
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
                  className="ml-2 text-white bg-blue-600 p-2 h-10 mt-2 hover:opacity-70
                  
                  text-xxs md:text-base 
                  "
                  onClick={() => {
                    if (ref?.current?.value === auth) {
                      alert("인증이 완료 되었습니다.")
                      setAuth("")
                      setState(state => ({ ...state, authState: false, email: true }))
                    } else alert("인증번호를 다시입력해주세요.")
                  }}
                />
              </div>
            )}
            <div
              className={`text-xs text-red-500 text-left ${errors[item.plac] ? "block" : "hidden"}`}
            >
              {errors[item.plac] ? <>{errors[item.plac]?.message}</> : null}
            </div>
          </Fragment>
        ))}
      </div>

      <div className="flex items-center justify-center mt-3">
        <input
          type="submit"
          value={pageValue}
          className="bg-blue-600 p-2 rounded-lg h-12 ml-4 text-white hover:opacity-70 cursor-pointer"
          disabled={loading}
        />
      </div>
    </form>
  )
}

export default UserInputComponent
