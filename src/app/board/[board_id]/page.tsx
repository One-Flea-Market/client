"use client"

import { boardState } from "@/atoms/itemState"
import Comment from "@/components/comment"
import LoginCheck from "@/components/loginCheck"
import useReset from "@/hooks/useReset/useReset"
import dynamic from "next/dynamic"
import { useRecoilState } from "recoil"
import { useState, useEffect } from "react"
import axios from "axios"
import { getCookie } from "cookies-next"
const InputForm = dynamic(() => import("@/components/inputForm"))
const ItemBtn = dynamic(() => import("@/components/item/itemBtn"))
const BoardDetail = ({ params: { board_id } }: search) => {
  const [state, setState] = useRecoilState(boardState)
  useReset({ setState })
  const [data, setData] = useState<any>({})
  useEffect(() => {
    void (async () => {
      setData(
        await (
          await axios.post(`${process.env.NEXT_PUBLIC_SECRET_URL}/board/${board_id}`, {
            token: getCookie("token")
          })
        ).data
      )
    })()
  }, [board_id])

  return (
    <main className="[&>*]:font-bold">
      <LoginCheck>
        {state ? (
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
                  <div className="flex [&>*]:text-sm [&>*]:w-8 ">
                    <ItemBtn link={`/board/${board_id}/delete`} path />
                  </div>
                ) : null}
              </div>
              <Comment url={`${process.env.NEXT_PUBLIC_SECRET_URL}/board/${board_id}/comment `} />
            </footer>
          </>
        ) : (
          <>
            <InputForm
              formArr={[
                {
                  type: "text",
                  plac: "제목을 입력하세요. (최대20자)",
                  defv: data.title,
                  id: "title"
                }
              ]}
              anyway={{ plac: "게시글 내용", value: "수정 하기", defv: data.body }}
              base={`/board/${board_id}/modify `}
              after="/board"
              type="patch"
            />
          </>
        )}
      </LoginCheck>
    </main>
  )
}

export default BoardDetail
