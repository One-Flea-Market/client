"use client"
import axios from "axios"
import { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
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
    formState: { errors }
  } = useForm()

  const { replace, push } = useRouter()
  const [loading, setLoading] = useState(false)
  const valid = async (data: Record<string, string>) => {
    try {
      // throw new Error("error")
      setLoading(state => !state)
      const res = await (
        await axios.post("https://jsonplaceholder.typicode.com/posts", { ...data })
      ).data
      console.log(res)
      // if(res.success) {alert(res.result); replace('/')}
      //  else {alert(res.result); setLoading(state => !state)}
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="flex justify-center flex-col lg:flex-row" onSubmit={handleSubmit(valid)}>
      <div className="flex flex-col mt-5 [&>*]:w-[75vw] md:[&>*]:w-[45vw] [&>*]:mb-3">
        {settingOption.map(item => (
          <Fragment key={item.plac}>
            <input
              type={item.type}
              className={`outline-none border-4 ${
                errors[item.plac] ? "border-red-300" : "border-blue-300"
              } h-[40%] rounded-xl p-2 text-lg`}
              placeholder={item.plac}
              {...register(item.plac, {
                required: "필수 항목입니다.",
                minLength: {
                  value: 5,
                  message: "최소 5자이상 입력 해주세요."
                },
                pattern: {
                  value:
                    item.plac === "phone-number" ? /^[0-9]+$/ : /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|@|\.]+$/,
                  message: "지원하지 않는 양식입니다."
                }
              })}
            />
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
          className="bg-blue-600 p-2 rounded-lg h-12 ml-4 text-white hover:opacity-70"
          disabled={loading}
        />
      </div>
    </form>
  )
}

export default UserInputComponent
//비동기 예외처리및 에러페이지로이동 (push)
