import axios from "axios"

const XIcon = ({ id }: { id: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6 absolute bg-red-500 text-white rounded-full top-3 right-3"
      onClick={async () => {
        // if (
        window.confirm("장바구니에서 삭제 하시겠습니까?")
        // ) filter(item.id)
        //const {result , message} = await(await axios.delete(`/cart/${item.id}`)).data
        // if(!result) alert(message)
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
export default XIcon
