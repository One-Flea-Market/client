/*eslint-disable*/
import { registration } from "@/atoms/registration"
import { useRecoilState } from "recoil"
const ShowImage = () => {
  const [{ list }, setState] = useRecoilState(registration)

  return (
    <article className="border-b border-gray-300">
      <label
        htmlFor="input-file"
        onChange={(event: any) => {
          // const imageLists = event.target.files
          // let imageUrlLists: string[] = [...list]
          // for (let i = 0; i < imageLists.length; i++)
          //   imageUrlLists.push(URL.createObjectURL(imageLists[i]))
          // if (imageUrlLists.length > 12) imageUrlLists = imageUrlLists.slice(0, 12)
          // setState((state: any) => ({ ...state, list: imageUrlLists }))

          const imageLists = event.target.files
          const newImageUrlLists = [...list] // 새로운 배열 생성

          const loadImage = (index: number) => {
            const reader = new FileReader()
            reader.onload = e => {
              if (!e.target) return
              const imageUrl = e.target.result as string
              newImageUrlLists.push(imageUrl)

              if (newImageUrlLists.length > 12) {
                newImageUrlLists.splice(12) // 이미지 배열이 12개를 넘으면 초과 부분을 삭제
              }

              if (index < imageLists.length - 1) {
                // 다음 이미지 로드
                loadImage(index + 1)
              } else {
                // 모든 이미지 로드 완료 후 상태 업데이트
                setState((state: any) => ({ ...state, list: newImageUrlLists }))
              }
            }
            reader.readAsDataURL(imageLists[index])
          }

          if (imageLists.length > 0) {
            loadImage(0) // 이미지 로드 시작
          }
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
