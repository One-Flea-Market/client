import { useRecoilValue } from "recoil"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { signState } from "@/atoms/signAuth"

const Input = ({
  register,
  plac,
  type,
  errors
}: {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  plac: string
  type: string
}) => {
  const state = useRecoilValue(signState)
  return (
    <input
      type={type}
      className={`outline-none border-4 ${
        errors[plac] ? "border-red-300" : "border-blue-300"
      }  rounded-xl p-2 md:text-lg w-full text-sm`}
      placeholder={plac}
      {...register(plac, {
        required: "필수 항목입니다.",
        disabled: state[plac],
        minLength: {
          value: 5,
          message: "최소 5자이상 입력 해주세요."
        },
        maxLength: 30,
        pattern: {
          value: plac === "phone-number" ? /^[0-9]+$/ : /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|@|\.]+$/,
          message: "지원하지 않는 양식입니다."
        }
      })}
    />
  )
}

export default Input
