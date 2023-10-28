import Icon from "@/components/icon"
import SearchEngine from "@/components/searchEngine"
import BoardBody from "./boardBody"
//meta data add
const Board = ({ searchParams: { search } }: { searchParams: { search: string } }) => {
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
