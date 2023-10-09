import Icon from "@/components/icon"
import SearchEngine from "@/components/searchEngine"
import BoardBody from "./boardBody"
//meta data add
const Board = ({ searchParams: { search } }: { searchParams: { search: string } }) => {
  const res = {
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
    <main className="gird grid-cols-1 [&>*]:font-bold w-full pt-1">
      <section className="flex w-full justify-between mb-3 ">
        <h1 className="text-lg md:text-3xl">자유 게시판</h1>
        <SearchEngine mode="board" />
      </section>

      <BoardBody search={search} />

      <Icon url="board/writing" />
    </main>
  )
}

export default Board
