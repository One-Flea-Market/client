import useMore from "@/hooks/useMore"
import { useRouter } from "next/navigation"

const XIcon = ({ id, link }: x) => {
  const { filter } = useMore({ link })
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6 absolute bg-red-500 text-white rounded-full top-3 right-3"
      onClick={() => {
        // if (window.confirm("장바구니에서 삭제 하시겠습니까?"))
        filter(id)
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
export default XIcon
