"use client"
import useSubmit from "@/hooks/useSubmit"
import { useLayoutEffect } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import useMovement from "@/hooks/useMovement"
import UploadImage from "./uploadImage"
import ShowImage from "./showImage"
import TitleInput from "./titleInput"
import { useRecoilState } from "recoil"
import { registration } from "@/atoms/registration"
function Registration(props: registration) {
  const [{ list, status }, setState] = useRecoilState(registration)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading, valid } = useSubmit({
    base: props.url,
    type: props.type,
    more: { list, status }
  })
  useMovement()
  useLayoutEffect(() => {
    setState({
      list: props.imgArr ? props.imgArr : ([] as string[]),
      status: props.current ? props.current : "not"
    })
  }, [setState, props])
  return (
    <section>
      <nav>
        <h1 className="text-2xl mb-2">{props.title}</h1>
      </nav>
      <UploadImage />
      <ShowImage />

      <article>
        <form
          onSubmit={handleSubmit(valid)}
          className="[&>*]:my-3 [&>*]:rounded-lg [&>*]:outline-none w-full flex flex-col justify-center"
        >
          {[
            {
              type: "text",
              plac: "제목을 입력 해주세요. (3자 이상)",
              id: "subTitle",
              value: "title"
            },
            {
              type: "text",
              plac: "가격을 입력 해주세요. (100원 이상)",
              id: "price",
              value: "price"
            }
          ].map(item => (
            <TitleInput
              {...item}
              register={register}
              errors={errors}
              key={item.id}
              defv={props[item.id as "subTitle" | "price"]}
            />
          ))}

          <div className="border-none flex justify-between [&>*]:h-[4rem] [&>*]:w-[40%] [&>*]:mx-auto border-4 border-blue-300 [&>*]:p-2 [&>*]:rounded-lg [&>*]:outline-none">
            {["거래", "대여"].map(item => (
              <motion.input
                type="button"
                whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
                value={item}
                key={item}
                onClick={() => setState(state => ({ ...state, status: item }))}
                className={`border-4 border-blue-300 ${
                  status === item ? "bg-blue-300 text-white" : null
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
