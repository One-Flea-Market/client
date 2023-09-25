"use client"
import Link from "next/link"
import { useState } from "react"

const Notice = () => {
  const [state, setstate] = useState({
    notice: [
      { title: "공지사항0", date: "9999-99-99", id: "v0" },
      { title: "공지사항1", date: "9999-99-99", id: "v1" },
      { title: "공지사항2", date: "9999-99-99", id: "v2" },
      { title: "공지사항3", date: "9999-99-99", id: "v3" },
      { title: "공지사항4", date: "9999-99-99", id: "v4" },
      { title: "공지사항5", date: "9999-99-99", id: "v5" },
      { title: "공지사항6", date: "9999-99-99", id: "v6" },
      { title: "공지사항7", date: "9999-99-99", id: "v7" },
      { title: "공지사항8", date: "9999-99-99", id: "v8" },
      { title: "공지사항9", date: "9999-99-99", id: "v9" }
    ],
    next: true
  })

  return (
    <main className="gird grid-cols-1 [&>*]:font-bold w-full pt-1">
      <section className="flex w-full justify-between mb-3 ">
        <h1 className="text-xl md:text-3xl">공지 사항</h1>
      </section>

      <section className="flex flex-col min-h-[27rem]">
        {state.notice.map((item, index) => (
          <Link key={item.id} href={`/notice/${item.id}`} prefetch={false}>
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
            onClick={() => {
              //버튼 누르면 다음게시글 가져오는 로직
            }}
          />
        )}
      </footer>
    </main>
  )
}

export default Notice
