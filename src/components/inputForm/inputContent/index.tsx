import { Fragment } from "react"

const InputContent = (item: any) => {
  // key={item.type}
  return (
    <Fragment>
      <input
        type={item.type}
        placeholder={item.plac}
        defaultValue={item.defv}
        className={`border-4 ${item.id === "email" && "mt-2"} ${
          item.errors[item.id] ? "border-red-300" : "border-blue-300"
        } h-14 w-full`}
        {...item.register(item.id, {
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
          item.errors[item.id] ? "block" : "hidden"
        }`}
      >
        {item.errors[item.id] ? <>{item.errors[item.id]?.message}</> : null}
      </div>
    </Fragment>
  )
}
export default InputContent
