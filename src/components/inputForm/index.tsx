"use client"
import { Fragment } from "react"
import { useForm } from "react-hook-form"
import useSubmit from "@/hooks/useSubmit/index"
import useMovement from "@/hooks/useMovement"
const InputForm = ({
  formArr,
  anyway,
  base,
  after
}: {
  formArr: Record<string, string>[]
  anyway: Record<string, string>
  base: string
  after?: string
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading, valid } = useSubmit(base, after)
  useMovement()
  return (
    <form
      onSubmit={handleSubmit(valid)}
      className="flex flex-col [&>*]:font-bold [&>*]:p-2 [&>*]:outline-none [&>*]:rounded-lg items-center"
    >
      {formArr.map(item => (
        <Fragment key={item.type}>
          <input
            type={item.type}
            placeholder={item.plac}
            defaultValue={item.defv}
            className={`border-4 ${item.type === "email" && "mt-2"} ${
              errors[item.type] ? "border-red-300" : "border-blue-300"
            } h-14 w-full`}
            {...register(item.type, {
              minLength: { value: 5, message: "5자 이상 입력 하세요." },
              maxLength:
                item.type === "text"
                  ? { value: 20, message: "20자 이내로 입력 하세요." }
                  : { value: 100, message: "" },
              required: "필수 항목입니다."
            })}
          />
          <div
            className={`text-sm text-red-500 text-left w-full ${
              errors[item.type] ? "block" : "hidden"
            }`}
          >
            {errors[item.type] ? <>{errors[item.type]?.message}</> : null}
          </div>
        </Fragment>
      ))}

      <textarea
        className="border-4 my-3 border-blue-300 h-72 resize-none w-full"
        defaultValue={anyway.defv}
        placeholder={anyway.plac}
        {...(register("body"), { minLength: 10, required: true })}
      />
      <input
        type="submit"
        id="for_submit"
        value={anyway.value}
        className="bg-blue-600 text-white cursor-pointer w-[20%] md:w-[10%] hover:opacity-70 text-xs md:text-base"
        disabled={loading}
      />
    </form>
  )
}

export default InputForm
