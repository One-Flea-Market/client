import axios from "axios"
import { getCookie } from "cookies-next"
const CommentBtn = (item: commentConfirm) => {
  return (
    <div className="flex [&>*]:text-sm">
      {["수정", "삭제"].map(str => (
        <div
          key={str}
          onClick={async () => {
            if (str === "수정")
              item.setState((state: commentModify) => ({
                ...state,
                [item.id]: { ...state[item.id], modify: !state[item.id]["modify"] }
              }))
            else {
              if (window.confirm(`댓글을 ${str} 하시겠습니까?`)) {
                const { result, message } = await (
                  await axios.delete(`${item.url.trim()}/${item.id}/delete `, {
                    data: {
                      token: getCookie("token")
                    }
                  })
                ).data
                if (!result) alert(message)
                window.location.reload()
              }
            }
          }}
          className="mx-1 hover:text-blue-300 cursor-pointer"
        >
          {str}
        </div>
      ))}
    </div>
  )
}
export default CommentBtn
