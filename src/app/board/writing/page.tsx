import InputForm from "@/components/inputForm"

const Writing = () => {
  return (
    <main className="flex flex-col h-[70%] justify-center">
      <nav>
        <h1 className="my-3 font-bold text-xl">게시글 작성하기</h1>
      </nav>
      <section>
        <InputForm
          formArr={[{ type: "text", plac: "제목을 입력하세요. (최대20자)", id: "title" }]}
          anyway={{ plac: "게시글 내용", value: "작성하기" }}
          base={"/게시글 작성 링크"}
          after="/board"
        />
      </section>
    </main>
  )
}
//날짜 추가
export default Writing
