import axios from "axios"
import { getCookie } from "cookies-next"

const CommentConfirm = (item: any) => {
  return (
    <input
      type="button"
      value="수정하기"
      className="mx-1 hover:text-blue-300 cursor-pointer text-sm"
      onClick={async () => {
        if (item.state[item.id].text.length >= 5) {
          const pure = { ...item.state[item.id] }
          delete pure["modify"]
          const { result, message } = await (
            await axios.patch(`${item.url.trim()}/${item.id}/modify `, {
              ...pure,
              token: getCookie("token")
            })
          ).data
          if (result) window.location.reload()
          // item.setState((state: any) => ({
          //   ...state,
          //   [item.id]: { ...state[item.id], modify: !state[item.id]["modify"] }
          // }))
          else alert(message)
        }
      }}
    />
  )
}
export default CommentConfirm
