import { commentModify } from "@/atoms/commentModify"
import useMovement from "@/hooks/useMovement"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
const CommentModify = (item: {
  username: string
  body: string
  date: string
  id: string
  oneself: boolean
}) => {
  const setState = useSetRecoilState(commentModify)
  useEffect(() => {
    setState(state => {
      const time = new Date(),
        date = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
      return { ...state, [item.id]: { ...state[item.id], date } }
    })
  }, [setState, item.id])
  useMovement()
  return (
    <>
      &nbsp;
      <input
        type="text"
        defaultValue={item.body}
        className=" my-1 text-base w-[95%] p-2 outline-none border-4 border-blue-300 rounded-lg"
        onChange={e =>
          setState(state => ({ ...state, [item.id]: { ...state[item.id], text: e.target.value } }))
        }
        onBlur={() =>
          setState(state => ({
            ...state,
            [item.id]: { ...state[item.id], text: !state[item.id]["text"] }
          }))
        }
      />
    </>
  )
}
export default CommentModify
