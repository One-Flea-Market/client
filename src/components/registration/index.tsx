"use client"
import useSubmit from "@/hooks/useSubmit"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import useMovement from "@/hooks/useMovement"
import UploadImage from "./uploadImage"
import ShowImage from "./showImage"
function Registration(props: any) {
  const [data, setData] = useState({
    list: props.imgArr ? props.imgArr : [],
    status: props.current ? props.current : "not"
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading, valid } = useSubmit({
    base: props.url,
    type: props.type,
    more: { list: data.list, status: data.status }
  })
  useMovement()
  return (
    <section>
      <nav>
        <h1 className="text-2xl mb-2">{props.title}</h1>
      </nav>
      <UploadImage data={data} setData={setData} />
      <ShowImage data={data} setData={setData} />

      <article>
        <form
          onSubmit={handleSubmit(valid)}
          className="[&>*]:my-3 [&>*]:rounded-lg [&>*]:outline-none w-full flex flex-col justify-center"
        >
          <input
            type="text"
            className={`p-2 h-[4rem] border-4 ${
              errors["title"] ? "border-red-300" : "border-blue-300"
            }`}
            defaultValue={props.subTitle}
            placeholder="제목을 입력 해주세요. (3자 이상)"
            {...register("title", {
              required: { value: true, message: "필수 양식 입니다." },
              minLength: 3,
              maxLength: 30
            })}
          />
          <input
            type="text"
            className={`p-2 h-[4rem] border-4 ${
              errors["price"] ? "border-red-300" : "border-blue-300"
            }`}
            defaultValue={props.price}
            placeholder="가격을 입력 해주세요. (100원 이상)"
            {...register("price", { minLength: 3, pattern: /^[0-9]+$/ })}
          />
          <div className="border-none flex justify-between [&>*]:h-[4rem] [&>*]:w-[40%] [&>*]:mx-auto border-4 border-blue-300 [&>*]:p-2 [&>*]:rounded-lg [&>*]:outline-none">
            {["거래", "대여"].map(item => (
              <motion.input
                type="button"
                whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
                value={item}
                key={item}
                onClick={() => setData(state => ({ ...state, status: item }))}
                className={`border-4 border-blue-300 ${
                  data.status === item ? "bg-blue-300 text-white" : null
                }`}
              />
            ))}
          </div>
          <textarea
            className={`resize-none p-3 h-[40vh] border-4 border-blue-300 ${
              errors["body"] && "border-red-300"
            }`}
            defaultValue={props.text}
            placeholder="설명을 입력 해주세요. (10자 이상)"
            {...register("body", {
              minLength: 10,
              required: true
            })}
          />
          <div className="w-full border-none flex justify-center">
            <input
              type="submit"
              disabled={loading}
              value={props.value}
              className="border-none w-[50%] h-[3rem] bg-blue-500 text-white hover:opacity-70 rounded-lg"
            />
          </div>
        </form>
      </article>
    </section>
  )
}
export default Registration
