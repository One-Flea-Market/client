"use client"
import { useLayoutEffect } from "react"
import useSWR from "swr"
import CommentInput from "./commentInput"
import { useRecoilState } from "recoil"
import { commentModify } from "@/atoms/commentModify"
import CommentBtn from "./commentBtn"
import CommentConfirm from "./commentConfirm"
import dynamic from "next/dynamic"
const CommentModify = dynamic(() => import("./commentModify"))
type commentModify = Record<string, Record<string, boolean | string>>
const data = [
  { username: "유저5", body: "지리네요", date: "9999-99-99", id: "v1", oneself: false },
  { username: "유저3", body: "good!", date: "9999-99-99", id: "v2", oneself: false },
  { username: "유저2", body: "감사합니다.", date: "9999-99-99", id: "v3", oneself: false },
  { username: "유저4", body: "빨리 합시다.", date: "9999-99-99", id: "v4", oneself: false },
  { username: "유저1", body: "radio gaga", date: "9999-99-99", id: "v5", oneself: true }
]

const Comment = ({ url }: { url: string }) => {
  // const { data, mutate } = useSWR(url)
  const [state, setState] = useRecoilState<commentModify>(commentModify)
  useLayoutEffect(() => {
    data.map(item => {
      if (item.oneself) {
        setState(state => ({ ...state, [item.id]: { modify: true, text: "", date: item.date } }))
      }
    })
  }, [setState])
  return (
    <section>
      <CommentInput url={url} />

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
                &rarr;
                {state[item.id] === undefined ? (
                  <div className="my-1 text-base w-[95%]">&nbsp;{item.body}</div>
                ) : state[item.id]["modify"] ? (
                  <div className="my-1 text-base w-[95%]">&nbsp;{item.body}</div>
                ) : (
                  <CommentModify {...item} />
                )}
              </div>
              {item.oneself ? (
                state[item.id] && state[item.id]["modify"] ? (
                  <CommentBtn {...item} url={url} />
                ) : (
                  <CommentConfirm {...item} url={url} />
                )
              ) : null}
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Comment
