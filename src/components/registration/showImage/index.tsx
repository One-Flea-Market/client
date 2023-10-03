import { memo } from "react"
const ShowImage = ({ data, setData }: any) => {
  return (
    <article className="border-b border-gray-300">
      <label
        htmlFor="input-file"
        onChange={(event: any) => {
          const target = event.target
          const imageLists = target.files
          let imageUrlLists: string[] = [...data.list]
          for (let i = 0; i < imageLists.length; i++)
            imageUrlLists.push(URL.createObjectURL(imageLists[i]))
          if (imageUrlLists.length > 12) imageUrlLists = imageUrlLists.slice(0, 12)
          setData((state: any) => ({ ...state, list: imageUrlLists }))
        }}
      >
        <input type="file" id="input-file" multiple className="hidden" />
        {data.list.length < 12 && (
          <div className="my-3 text-center text-lg hover:text-blue-300">사진 추가</div>
        )}
      </label>
    </article>
  )
}
export default memo(ShowImage)
