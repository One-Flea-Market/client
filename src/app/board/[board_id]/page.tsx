"use client"

import { boardState } from "@/atoms/itemState"
import Comment from "@/components/comment"
import LoginCheck from "@/components/loginCheck"
import useReset from "@/hooks/useReset/useReset"
import dynamic from "next/dynamic"
import { useLayoutEffect } from "react"
import { useRecoilState } from "recoil"
import useSWR from "swr"
const InputForm = dynamic(() => import("@/components/inputForm"))
const ItemBtn = dynamic(() => import("@/components/item/itemBtn"))
const BoardDetail = ({ params: { board_id } }: search) => {
  //const {data} = useSWR(`/board/${board_id}`)

  const data = {
    title: "게시글9",
    date: "9999-99-99",
    body: "게시글 입니다.",
    user: "유저1",
    id: "v9",
    oneself: true
  }
  const [state, setState] = useRecoilState(boardState)
  useReset({ setState })

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
              <Comment url={`/board/${board_id}/comment `} />
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
