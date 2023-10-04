import { registration } from "@/atoms/registration"
import Image from "next/image"
import { useRecoilState } from "recoil"
const UploadImage = () => {
  const [{ list }, setState] = useRecoilState(registration)
  return (
    <article
      className={`grid ${
        list.length ? "grid-cols-3 md:grid-cols-4" : "grid-cols-1"
      } gap-3 border-dotted border-4 border-blue-300 p-2 rounded-lg min-h-[55vh]  max-h-[120vh]`}
    >
      {list.length ? (
        <>
          {list.map((item: string, index: number) => (
            <div key={item} className="w-full h-[25vh] relative">
              <Image
                src={item}
                alt={`${item}-${index}`}
                width={400}
                height={400}
                className="w-full h-full rounded-lg"
              />

              <input
                type="button"
                value="x"
                onClick={() =>
                  setState((state: any) => ({
                    ...state,
                    list: state.list.filter((_: string, id: number) => id !== index)
                  }))
                }
                className="absolute right-1 top-1 bg-red-600 text-white text-base rounded-full w-8 h-8 hover:text-black"
              />
            </div>
          ))}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center text-xl text-gray-500">
          이미지를 업로드 해주세요.(최대 12장)
        </div>
      )}
    </article>
  )
}
export default UploadImage
