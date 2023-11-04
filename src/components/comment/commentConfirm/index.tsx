import { commentModify } from "@/atoms/commentModify"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useRecoilState } from "recoil"

const CommentConfirm = (item: commentConfirm) => {
  const [state, setState] = useRecoilState(commentModify)
  return (
    <input
      type="button"
      value="수정하기"
      className="mx-1 hover:text-blue-300 cursor-pointer text-sm"
      onClick={async () => {
        const { result, message } = await (
          await axios.patch(`${item.url}/${item.id}/modify `, {
            date: state.date,
            body: state.text,
            token: getCookie("token")
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
