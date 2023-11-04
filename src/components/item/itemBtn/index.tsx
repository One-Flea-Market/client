"use client"
import { itemState, boardState } from "@/atoms/itemState"
import axios from "axios"
import { useSetRecoilState } from "recoil"

const ItemBtn = ({ link, path }: path) => {
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
                if (result) window.history.back()
                else {
                  alert(message)
                  window.location.reload()
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
