import Link from "next/link"
const NoticeDetail = async ({ params: { notice_id } }: notice) => {
  // const data = await (
  //   await fetch(`/notice/${notice_id} `, { cache: "no-store" })
  // ).json()
  const data = {
    title: "공지사항9",
    date: "9999-99-99",
    body: "원플리마켓 거래 규칙입니다.",
    id: "v9"
  }
  return (
    <main className="[&>*]:font-bold">
      <section className="flex w-full justify-between items-baseline pb-2 border-b border-b-gray-400">
        <h1 className="text-xl mb-1 max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
          {data.title}
        </h1>
        <div className="text-sm">날짜: {data.date}</div>
      </section>
      <section className="border-b border-b-gray-400 min-h-[70vh] py-3 break-all">
        {data.body}
      </section>
      <footer className="flex justify-center w-full">
        <Link
          href="/"
          className="text-white bg-blue-500 p-2 text-lg mt-4 rounded-lg hover:opacity-70"
        >
          home
        </Link>
      </footer>
    </main>
  )
}

export default NoticeDetail
