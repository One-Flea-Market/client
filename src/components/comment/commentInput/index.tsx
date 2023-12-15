import useSubmit from "@/hooks/useSubmit"
import { getCookie } from "cookies-next"
import { useForm } from "react-hook-form"

const CommentInput = ({ url }: url) => {
  const { register, handleSubmit } = useForm()
  const after = url.split("/").at(-2)

  const { loading, valid } = useSubmit({
    base: `${url.trim()}/new`,
    more: { token: getCookie("token") },
    after
  })
  return (
    <form onSubmit={handleSubmit(valid)} className="flex">
      <textarea
        className="resize-none border-4 border-blue-300 w-[85%] md:w-[90%] rounded-lg p-2 outline-none"
        {...register("text", {
          required: true,
          minLength: 5
        })}
        placeholder="댓글을 입력 해주세요.(최소 5자)"
      />
      <input
        type="submit"
        value="입력"
        disabled={loading}
        className="mx-2 bg-blue-500 text-white w-[15%] md:w-[10%] rounded-lg"
      />
    </form>
  )
}
export default CommentInput
