import { boardState, itemState } from "@/atoms/itemState"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useSetRecoilState } from "recoil"

const ItemBtn = ({ link, path }: { link: string; path?: boolean }) => {
  const { refresh, back } = useRouter()
  const setState = useSetRecoilState(path ? boardState : itemState)
  return (
    <>
      {["수정", "삭제"].map(item => (
        <input
          type="button"
          key={item}
          value={item}
          className={` hover:${path ? "text-blue-300" : "opacity-70"}
           ${path ? "mx-1 text-right" : "bg-blue-500 rounded-lg text-white h-12"} cursor-pointer`}
          onClick={async () => {
            if (item === "수정") setState(state => !state)
            else {
              if (window.confirm("게시물을 삭제하시겠습니까?")) {
                const { result, message } = await (await axios.delete(link)).data
                if (result) back()
                else {
                  alert(message)
                  refresh()
                }
              }
            }
          }}
        />
      ))}
    </>
  )
}
export default ItemBtn
