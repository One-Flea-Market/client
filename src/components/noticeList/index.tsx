import Link from "next/link"

const NoticeList = async () => {
  //   const res = await (
  //     await fetch("/home/notice", { cache: "force-cache", next: { revalidate: 60 * 60 * 24 } })
  //   ).json()
  const res = [
    { title: "거래규칙1", date: "1999-99-99", id: "v1" },
    { title: "거래규칙2", date: "1999-99-99", id: "v2" },
    { title: "거래규칙3", date: "1999-99-99", id: "v3" }
  ]
  return (
    <section className="[&>*]:py-3 [&>*]:font-bold">
      {res.map((item, index) => (
        <Link href={`/notice/${item.id}`} prefetch={false} key={item.title}>
          <article
            key={item.title}
            className="hover:bg-gray-100 flex w-full justify-between items-center cursor-pointer border-b border-gray-300 h-10"
          >
            <div className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
              {index + 1}. {item.title}
            </div>
            <div className="text-xs">{item.date}</div>
          </article>
        </Link>
      ))}
    </section>
  )
}
export default NoticeList
