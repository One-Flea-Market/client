"use client"
import { useForm } from "react-hook-form"
import useSubmit from "@/hooks/useSubmit/index"
import useMovement from "@/hooks/useMovement"
import InputContent from "./inputContent"
import { getCookie } from "cookies-next"
const InputForm = ({ formArr, anyway, base, after, type }: inputForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading, valid } = useSubmit({ base, after, type, more: { token: getCookie("token") } })
  useMovement()
  return (
    <form
      onSubmit={handleSubmit(valid)}
      className="flex flex-col [&>*]:font-bold [&>*]:p-2 [&>*]:outline-none [&>*]:rounded-lg items-center"
    >
      {formArr.map(item => (
        <InputContent {...item} register={register} errors={errors} key={item.type} />
      ))}

      <textarea
        className="border-4 my-3 border-blue-300 h-72 resize-none w-full"
        defaultValue={anyway.defv}
        placeholder={anyway.plac}
        {...register("body", { minLength: 10, required: true })}
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
