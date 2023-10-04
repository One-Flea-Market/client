import { registration } from "@/atoms/registration"
import { useRecoilState } from "recoil"
const ShowImage = () => {
  const [{ list }, setState] = useRecoilState(registration)
  return (
    <article className="border-b border-gray-300">
      <label
        htmlFor="input-file"
        onChange={(event: any) => {
          const target = event.target
          const imageLists = target.files
          let imageUrlLists: string[] = [...list]
          for (let i = 0; i < imageLists.length; i++)
            imageUrlLists.push(URL.createObjectURL(imageLists[i]))
          if (imageUrlLists.length > 12) imageUrlLists = imageUrlLists.slice(0, 12)
          setState((state: any) => ({ ...state, list: imageUrlLists }))
        }}
      >
        <input type="file" id="input-file" multiple className="hidden" />
        {list.length < 12 && (
          <div className="my-3 text-center text-lg hover:text-blue-300">사진 추가</div>
        )}
      </label>
    </article>
  )
}
export default ShowImage
