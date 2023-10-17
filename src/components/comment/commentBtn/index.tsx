import axios from "axios"
import { commentModify } from "@/atoms/commentModify"
import { useSetRecoilState } from "recoil"
import { useSWRConfig } from "swr"
const CommentBtn = (item: commentConfirm) => {
  const setState = useSetRecoilState(commentModify)
  const { mutate } = useSWRConfig()
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
                if (result)
                  mutate(
                    item.url,
                    (data: any) => data.filter((fitem: comment[number]) => fitem.id !== item.id),
                    false
                  )
                else alert(message)
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
