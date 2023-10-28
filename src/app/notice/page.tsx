"use client"
import useMore from "@/hooks/useMore"
import Link from "next/link"

const Notice = () => {
  const { state, better } = useMore<"board">({
    link: `${process.env.NEXT_PUBLIC_SECRET_URL}/notice`
  })
  return (
    <main className="gird grid-cols-1 [&>*]:font-bold w-full pt-1">
      <section className="flex w-full justify-between mb-3 ">
        <h1 className="text-xl md:text-3xl">공지 사항</h1>
      </section>

      <section className="flex flex-col min-h-[27rem]">
        {state.list.map((item, index) => (
          <Link key={item.id as string} href={`/notice/${item.id}`} prefetch={false}>
            <article className="flex w-full justify-between py-2 items-baseline border-b border-gray-300 hover:bg-gray-100">
              <div className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-lg">
                {index + 1}. {item.title}
              </div>
              <article className="text-xs text">{item.date}</article>
            </article>
          </Link>
        ))}
      </section>

      <footer className="w-full flex justify-center mt-5">
        {state.next && (
          <input
            type="button"
            value="More &#8897;"
            className="bg-blue-500 w-[70%] font-bold text-white text-xl rounded-xl hover:opacity-70 h-10"
            onClick={better}
          />
        )}
      </footer>
    </main>
  )
}

export default Notice
