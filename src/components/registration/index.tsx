"use client"
import useSubmit from "@/hooks/useSubmit"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
function Registration({ title, imgArr = [], subTitle, price, text, status, current }: any) {
  const [state, setState] = useState<string[]>([...imgArr])
  const [stus, setStus] = useState(current)
  const { register, handleSubmit } = useForm()
  const { loading, valid } = useSubmit({ base: "", more: { state, stus } })
  return (
    <section>
      <nav>
        <h1 className="text-2xl mb-2">{title}</h1>
      </nav>
      <article
        className={`grid ${
          state.length ? "grid-cols-3 md:grid-cols-4" : "grid-cols-1"
        } gap-3 border-dotted border-4 border-blue-300 p-2 rounded-lg min-h-[55vh]  max-h-[120vh]`}
      >
        {state.length ? (
          <>
            {state.map((item, index) => (
              <div key={item} className="w-full h-[25vh] relative">
                <Image
                  src={item}
                  alt={`${item}-${index}`}
                  width={400}
                  height={400}
                  className="w-full h-full rounded-lg"
                />

                <input
                  type="button"
                  value="x"
                  onClick={() => setState(state => state.filter((_, id) => id !== index))}
                  className="absolute right-1 top-1 bg-red-600 text-white text-base rounded-full w-8 h-8 hover:text-black"
                />
              </div>
            ))}
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center text-xl text-gray-500">
            이미지를 업로드 해주세요.(최대 12장)
          </div>
        )}
      </article>

      <article className="border-b border-gray-300">
        <label
          htmlFor="input-file"
          onChange={(event: any) => {
            const target = event.target
            const imageLists = target.files
            let imageUrlLists: string[] = [...state]
            for (let i = 0; i < imageLists.length; i++)
              imageUrlLists.push(URL.createObjectURL(imageLists[i]))
            if (imageUrlLists.length > 12) imageUrlLists = imageUrlLists.slice(0, 12)
            setState(imageUrlLists)
          }}
        >
          <input type="file" id="input-file" multiple className="hidden" />
          {state.length < 12 && <div className="my-3 text-center text-lg">사진 추가</div>}
        </label>
      </article>

      <article>
        <form
          onSubmit={handleSubmit(valid)}
          className="[&>*]:my-3 [&>*]:border-4 [&>*]:border-blue-300 [&>*]:rounded-lg [&>*]:outline-none w-full flex flex-col justify-center"
        >
          <input
            type="text"
            className="p-2 h-[4rem]"
            defaultValue={subTitle}
            placeholder="제목을 입력 해주세요."
            {...register("title", {
              required: { value: true, message: "필수 양식 입니다." },
              minLength: 3,
              maxLength: 30
            })}
          />
          <input
            type="text"
            className="p-2 h-[4rem]"
            defaultValue={price}
            placeholder="가격을 입력 해주세요."
            {...register("price", { minLength: 3, pattern: /^[0-9]+$/ })}
          />
          <div className="border-none flex justify-between [&>*]:h-[4rem] [&>*]:w-[40%] [&>*]:mx-auto [&>*]:border-4 [&>*]:border-blue-300 [&>*]:p-2 [&>*]:rounded-lg [&>*]:outline-none">
            {["거래", "대여"].map(item => (
              <motion.input
                type="button"
                whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
                value={item}
                key={item}
                onClick={e => setStus(e.currentTarget.value)}
                className={`${stus === item ? "bg-blue-300 text-white" : null}`}
              />
            ))}
          </div>
          <textarea
            className="resize-none p-3 h-[40vh]"
            defaultValue={text}
            placeholder="설명을 입력 해주세요."
            {...register("body", {
              minLength: 10,
              required: true
            })}
          />
          <div className="w-full border-none flex justify-center">
            <input
              type="submit"
              disabled={loading}
              value={status}
              className="border-none w-[50%] h-[3rem] bg-blue-500 text-white hover:opacity-70 rounded-lg"
            />
          </div>
        </form>
      </article>
    </section>
  )
}
//date 필요
export default Registration
