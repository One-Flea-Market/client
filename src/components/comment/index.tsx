"use client"
import { useLayoutEffect, useEffect, useState } from "react"
import CommentInput from "./commentInput"
import dynamic from "next/dynamic"
import axios from "axios"
import { getCookie } from "cookies-next"
const CommentModify = dynamic(() => import("./commentModify"))
const CommentBtn = dynamic(() => import("./commentBtn"))
const CommentConfirm = dynamic(() => import("./commentConfirm"))

const Comment = ({ url }: url) => {
  const [data, setData] = useState<any>([])
  const [state, setState] = useState<commentModify>({})
  useLayoutEffect(() => {
    void (async () => {
      setData(
        await (
          await axios.post(
            url,
            { token: getCookie("token") },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
        ).data
      )
    })()
  }, [url])
  useEffect(() => {
    data.length &&
      data.map((item: any) => {
        if (item.onself) {
          return setState(state => ({
            ...state,
            [item.id]: { modify: true, text: "", date: item.date }
          }))
        }
      })
  }, [data])
  return (
    <section>
      <CommentInput url={url} />

      <article className="border-t border-gray-300 mt-2 ">
        {data &&
          data.map((item: any) => (
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
                    <div className="my-1 text-base w-[95%]">&nbsp;{item.text}</div>
                  ) : state[item.id]["modify"] ? (
                    <div className="my-1 text-base w-[95%]">&nbsp;{item.text}</div>
                  ) : (
                    <CommentModify {...item} setState={setState} />
                  )}
                </div>
                {item.onself ? (
                  state[item.id] && state[item.id]["modify"] ? (
                    <CommentBtn {...item} url={url} setState={setState} />
                  ) : (
                    <CommentConfirm {...item} url={url} state={state} setState={setState} />
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
