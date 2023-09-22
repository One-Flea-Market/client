"use client"
import { useForm } from "react-hook-form"
import useSubmit from "@/hooks/useSubmit/index"
const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading, valid } = useSubmit("/문의 링크")
  return (
    <form
      onSubmit={handleSubmit(valid)}
      className="flex flex-col [&>*]:font-bold [&>*]:p-2 [&>*]:outline-none [&>*]:rounded-lg items-center"
    >
      <input
        type="text"
        placeholder="문의 제목(최소 5자)"
        className={`border-4 ${errors["title"] ? "border-red-300" : "border-blue-300"} h-14 w-full`}
        {...register("title", {
          minLength: { value: 5, message: "5자 이상 입력 하세요." },
          required: "필수 항목입니다."
        })}
      />
      <div
        className={`text-sm text-red-500 text-left w-full ${errors["title"] ? "block" : "hidden"}`}
      >
        {errors["title"] ? <>{errors["title"]?.message}</> : null}
      </div>

      <input
        type="email"
        placeholder="email"
        className={`border-4 mt-5 ${
          errors["title"] ? "border-red-300" : "border-blue-300"
        } h-14 w-full`}
        {...register("email", {
          required: "필수 양식 입니다."
        })}
      />

      <div
        className={`text-sm text-red-500 text-left w-full ${errors["email"] ? "block" : "hidden"}`}
      >
        {errors["email"] ? <>{errors["email"]?.message}</> : null}
      </div>

      <textarea
        className={`border-4 ${
          errors["title"] ? "my-3" : "my-5"
        } border-blue-300 h-72 resize-none w-full`}
        placeholder="문의 내용(최소 10자)"
        {...(register("body"), { minLength: 10, required: true })}
      />
      <input
        type="submit"
        value="문의"
        className="bg-blue-600 text-white cursor-pointer w-[20%] md:w-[10%] hover:opacity-70 text-xs md:text-base"
        disabled={loading}
      />
    </form>
  )
}

export default InquiryForm
