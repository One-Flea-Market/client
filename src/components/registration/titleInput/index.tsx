import React from "react"

function TitleInput(item: {
  type: string
  plac: string
  id: string
  value: string
  errors: any
  register: any
  defv?: string
}) {
  return (
    <input
      type={item.type}
      className={`p-2 h-[4rem] border-4 ${
        item.errors[item.value] ? "border-red-300" : "border-blue-300"
      }`}
      defaultValue={item.defv}
      placeholder={item.plac}
      {...item.register(item.value, {
        required: { value: true, message: "필수 양식 입니다." },
        minLength: 3,
        maxLength: 50,
        pattern: item.value === "price" ? /^[0-9]+$/ : undefined
      })}
    />
  )
}

export default TitleInput
