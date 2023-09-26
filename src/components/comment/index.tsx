"use client"
import useSubmit from "@/hooks/useSubmit"
import { useForm } from "react-hook-form"
import useSWR from "swr"

const Comment = () => {
  const { register, handleSubmit } = useForm()
  //   const { data, mutate } = useSWR("/댓글 가져오기 링크")
  const { loading, valid } = useSubmit("/댓글 작성 링크")
  const data = [
    { username: "유저5", text: "지리네요", date: "9999-99-99", id: "v1", oneself: false },
    { username: "유저3", text: "good!", date: "9999-99-99", id: "v2", oneself: false },
    { username: "유저2", text: "감사합니다.", date: "9999-99-99", id: "v3", oneself: false },
    { username: "유저4", text: "빨리 합시다.", date: "9999-99-99", id: "v4", oneself: false },
    { username: "유저1", text: "radio gaga", date: "9999-99-99", id: "v5", oneself: true }
  ]
  return (
    <section>
      <form onSubmit={handleSubmit(valid)} className="flex">
        <textarea
          className="resize-none border-4 border-blue-300 w-[85%] md:w-[90%] rounded-lg p-2 outline-none"
          {...register("comment text", {
            required: true,
            minLength: 5
          })}
          placeholder="댓글을 입력 해주세요.(최소 5자)"
        />
        <input
          type="submit"
          value="입력"
          disabled={loading}
          className="mx-2 bg-blue-500 text-white w-[15%] md:w-[10%] rounded-lg"
        />
      </form>

      <article className="border-t border-gray-300 mt-2 ">
        {data.map(item => (
          <div key={item.id} className="border-b border-gray-300 p-1">
            <div className="flex w-full justify-between">
              <div className="text-sm max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
                username:{item.username}
              </div>
              <div className="text-sm">날짜:{item.date}</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div className=" flex w-[80%] max-w-[80%] break-words justify-end items-center">
                &rarr;<div className="my-1 text-base w-[95%]">&nbsp;{item.text}</div>
              </div>
              {item.oneself ? (
                <div className="flex [&>*]:text-sm">
                  {["수정", "삭제"].map(item => (
                    <div
                      key={item}
                      onClick={() => {
                        window.confirm(`댓글을 ${item} 하시겠습니까?`)
                        // 이후 수정및 삭제로직 필요
                      }}
                      className="mx-1 hover:text-blue-300 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Comment
