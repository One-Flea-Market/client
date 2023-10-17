import { commentModify } from "@/atoms/commentModify"
import axios from "axios"
import { useRecoilState } from "recoil"
import { useSWRConfig } from "swr"

const CommentConfirm = (item: commentConfirm) => {
  const [state, setState] = useRecoilState(commentModify)
  const { mutate } = useSWRConfig()
  return (
    <input
      type="button"
      value="수정하기"
      className="mx-1 hover:text-blue-300 cursor-pointer text-sm"
      onClick={async () => {
        mutate(
          item.url,
          (data: any) => {
            const change = data?.find((fitem: comment[number]) => fitem === item),
              exclude = data?.filter((fitem: comment[number]) => fitem !== change)
            return [{ ...change, date: state.date, body: state.text }, ...exclude]
          },
          false
        )
        const { result, message } = await (
          await axios.patch(`${item.url}/${item.id}/modify `, {
            date: state.date,
            body: state.text
          })
        ).data
        if (result)
          setState(state => ({
            ...state,
            [item.id]: { ...state[item.id], modify: !state[item.id]["modify"] }
          }))
        else alert(message)
      }}
    />
  )
}
export default CommentConfirm
