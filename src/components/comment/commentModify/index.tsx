/*eslint-disable*/
import useMovement from "@/hooks/useMovement"
import { useEffect } from "react"
const CommentModify = (item: any) => {
  useEffect(() => {
    item.setState((state: any) => {
      const time = new Date(),
        date = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
      return { ...state, [item.id]: { ...state[item.id], date } }
    })
  }, [])
  useMovement()
  return (
    <>
      &nbsp;
      <input
        type="text"
        defaultValue={item.text}
        className=" my-1 text-base w-[95%] p-2 outline-none border-4 border-blue-300 rounded-lg"
        onChange={e => {
          item.setState((state: any) => ({
            ...state,
            [item.id]: { ...state[item.id], text: e.target.value }
          }))
        }}
        // onBlur={() =>
        //   item.setState((state: any) => ({
        //     ...state,
        //     [item.id]: { ...state[item.id], text: !state[item.id]["text"] }
        //   }))
        // }
      />
    </>
  )
}
export default CommentModify
