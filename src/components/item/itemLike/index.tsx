import axios from "axios"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useSWRConfig } from "swr"
const ItemLike = ({ items_key, onlike }: item) => {
  const { refresh } = useRouter()
  const { mutate } = useSWRConfig()
  return (
    <div className="w-full flex justify-center">
      <label
        htmlFor="likeBtn"
        className="bg-gray-100 w-[60%] flex justify-center items-center h-12 rounded-lg hover:bg-gray-200"
        onClick={async () => {
          mutate(`/items/${items_key}`, (data: any) => ({ ...data, onlike: !data.onlike }), false)
          const { result, message } = await (
            await axios.patch(`/items/${items_key}/like`, { onlike })
          ).data
          if (!result) {
            alert(message)
            refresh()
          }
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={onlike ? "red" : "white"}
          className="w-7 h-7"
          stroke="red"
          strokeWidth={2}
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </motion.svg>
        <div className="text-blue-500">&nbsp;찜하기</div>
      </label>
      <input type="button" id="likeBtn" className="hidden" />
    </div>
  )
}
export default ItemLike
