"use client"
import { Fragment } from "react"
import { useForm } from "react-hook-form"
import useSubmit from "@/hooks/useSubmit/index"
import useMovement from "@/hooks/useMovement"
import { signState } from "@/atoms/signAuth"
import { useRecoilValue } from "recoil"
import dynamic from "next/dynamic"
import AuthButton from "./authButton"
import Input from "./Input"
const EmailAuth = dynamic(() => import("./emailAuth"))
const UserInputComponent = ({ settingOption, pageValue, url }: userInput) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()
  const state = useRecoilValue(signState)
  const { loading, valid } = useSubmit({ base: url })
  useMovement()
  return (
    <form className="flex justify-center flex-col" onSubmit={handleSubmit(valid)}>
      <div className="flex flex-col mt-5 w-[60vw]">
        {settingOption.map(item => (
          <Fragment key={item.plac}>
            <div className="w-[110%] md:w-full -ml-5 md:ml-0 [&>*]:mb-3 [&>*]:h-14 flex justify-center">
              <div className="w-full h-[40%]">
                <Input errors={errors} register={register} type={item.type} plac={item.plac} />
              </div>
              {(url === "/sign-in" && item.plac === "email") || item.plac === "username" ? (
                <AuthButton plac={item.plac} watch={watch} />
              ) : null}
            </div>
            {item.plac === "email" && state.authState && <EmailAuth />}
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
