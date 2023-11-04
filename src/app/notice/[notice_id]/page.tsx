import Link from "next/link"
const NoticeDetail = async ({ params: { notice_id } }: notice) => {
  const data = await (
    await fetch(`${process.env.SECRET_URL}/notice/${notice_id} `, {
      next: { revalidate: 60 * 60 * 24 }
    })
  ).json()
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
