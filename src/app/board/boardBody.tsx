"use client"
import Link from "next/link"
import useMore from "@/hooks/useMore"
const BoardBody = ({ search }: { search: string }) => {
  //   const { state, better } = useMore({ link: search ? `/board/search/${search}` : "/board" })
  const state = {
    list: [
      { title: "게시글0", date: "9999-99-99", id: "v0" },
      { title: "게시글1", date: "9999-99-99", id: "v1" },
      { title: "게시글2", date: "9999-99-99", id: "v2" },
      { title: "게시글3", date: "9999-99-99", id: "v3" },
      { title: "게시글4", date: "9999-99-99", id: "v4" },
      { title: "게시글5", date: "9999-99-99", id: "v5" },
      { title: "게시글6", date: "9999-99-99", id: "v6" },
      { title: "게시글7", date: "9999-99-99", id: "v7" },
      { title: "게시글8", date: "9999-99-99", id: "v8" },
      { title: "게시글9", date: "9999-99-99", id: "v9" }
    ],
    next: true
  }
  return (
    <>
      <section className="flex flex-col min-h-[27rem]">
        {state.list.map((item, index) => (
          <Link key={item.id as string} href={`/board/${item.id}`} prefetch={false}>
            <article className="flex w-full justify-between py-2 items-baseline border-b border-gray-300 hover:bg-gray-100">
              <div className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap  text-base md:text-lg">
                {index + 1}. {item.title}
              </div>
              <article className="text-xs ">{item.date}</article>
            </article>
          </Link>
        ))}
      </section>

      <footer className="w-full flex justify-center mt-5">
        {state.next && (
          <input
            type="button"
            value="More &#8897;"
            className="bg-blue-500 w-[80%] ml-2 text-xl h-10 rounded-xl hover:opacity-70 font-bold text-white"
            // onClick={better}
          />
        )}
      </footer>
    </>
  )
}
export default BoardBody
