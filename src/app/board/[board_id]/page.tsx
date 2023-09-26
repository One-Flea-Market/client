import Comment from "@/components/comment"

const BoardDetail = async ({ params: { board_id } }: { params: { board_id: string } }) => {
  // const data = await (
  //   await fetch(`/api링크/${board_id}`, { cache: "no-store" })
  // ).json()
  const data = {
    title: "게시글9",
    date: "9999-99-99",
    text: "게시글 입니다.",
    user: "유저1",
    id: "v9",
    ondeself: true
  }
  return (
    <main className="[&>*]:font-bold">
      <section className="flex w-full justify-between items-center border-b border-b-gray-400">
        <h1 className="text-lg mb-2">{data.title}</h1>
        <article className="pb-2">
          <div className="text-sm">작성자: {data.user}</div>
          <div className="text-sm">날짜: {data.date}</div>
        </article>
      </section>
      <section className="border-b border-b-gray-400 min-h-[50vh] py-3">{data.text}</section>
      <footer className="flex  flex-col w-full">
        <div className="flex w-full items-baseline justify-between px-1">
          <h3 className="my-2 text-lg">댓글</h3>
          {data.ondeself ? (
            <div className="flex [&>*]:text-sm">
              {["수정", "삭제"].map(item => (
                <div key={item} className="mx-1 hover:text-blue-300 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <Comment />
      </footer>
    </main>
  )
}

export default BoardDetail
