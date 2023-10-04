import axios from "axios"
import { commentModify } from "@/atoms/commentModify"
import { useSetRecoilState } from "recoil"
const CommentBtn = (item: {
  username: string
  body: string
  date: string
  id: string
  oneself: boolean
  url: string
}) => {
  const [setState] = [useSetRecoilState(commentModify)]
  return (
    <div className="flex [&>*]:text-sm">
      {["수정", "삭제"].map(str => (
        <div
          key={str}
          onClick={async () => {
            if (str === "수정")
              setState(state => ({
                ...state,
                [item.id]: { ...state[item.id], modify: !state[item.id]["modify"] }
              }))
            else {
              if (window.confirm(`댓글을 ${str} 하시겠습니까?`)) {
                const { result, message } = await (
                  await axios.delete(`${item.url}/${item.id}/delete `)
                ).data
                // if(result)mutate(data=>data.filter(fitem => fitem.id !== item.id),false)
                // else alert(message)
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
