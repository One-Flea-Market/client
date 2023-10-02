"use client"

import Comment from "@/components/comment"
import axios from "axios"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"
import useSWR from "swr"
const InputForm = dynamic(() => import("@/components/inputForm"))
const BoardDetail = ({ params: { board_id } }: { params: { board_id: string } }) => {
  //const {data} = useSWR(`/board/${board_id}`)

  const data = {
    title: "게시글9",
    date: "9999-99-99",
    body: "게시글 입니다.",
    user: "유저1",
    id: "v9",
    oneself: true
  }

  const [state, setState] = useState(false)
  const { replace, refresh } = useRouter()
  return (
    <main className="[&>*]:font-bold">
      {state ? (
        <>
          <InputForm
            formArr={[
              { type: "text", plac: "제목을 입력하세요. (최대20자)", defv: data.title, id: "title" }
            ]}
            anyway={{ plac: "게시글 내용", value: "수정 하기", defv: data.body }}
            base={`/board/${board_id}/modify `}
            after="/board"
            type="patch"
          />
        </>
      ) : (
        <>
          <section className="flex w-full justify-between items-center border-b border-b-gray-400">
            <h1 className="text-lg mb-2 max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap ">
              {data.title}
            </h1>
            <article className="pb-2 [&>*]:text-sm [&>*]:w-[10em] [&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:whitespace-nowrap">
              <div>작성자: {data.user}</div>
              <div>날짜: {data.date}</div>
            </article>
          </section>
          <section className="border-b border-b-gray-400 min-h-[50vh] py-3 break-all">
            {data.body}
          </section>
          <footer className="flex  flex-col w-full">
            <div className="flex w-full items-baseline justify-between px-1">
              <h3 className="my-2 text-lg">댓글</h3>
              {data.oneself ? (
                <div className="flex [&>*]:text-sm">
                  {["수정", "삭제"].map(item => (
                    <div
                      key={item}
                      className="mx-1 hover:text-blue-300 cursor-pointer"
                      onClick={async () => {
                        if (item === "수정") {
                          setState(state => !state)
                        } else {
                          if (window.confirm("게시물을 삭제하시겠습니까?")) {
                            const { result, message } = await (await axios.delete("/board/id")).data
                            if (result) replace("/board")
                            else {
                              alert(message)
                              refresh()
                            }
                          }
                        }
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <Comment url={`/board/${board_id}/comment `} />
          </footer>
        </>
      )}
    </main>
  )
}

export default BoardDetail
