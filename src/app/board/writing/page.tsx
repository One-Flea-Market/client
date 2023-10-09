import InputForm from "@/components/inputForm"
import LoginCheck from "@/components/loginCheck"
//meta data add
const Writing = () => {
  return (
    <main className="flex flex-col h-[70%] justify-center">
      <nav>
        <h1 className="my-3 font-bold text-xl">게시글 작성하기</h1>
      </nav>
      <section>
        <LoginCheck>
          <InputForm
            formArr={[{ type: "text", plac: "제목을 입력하세요. (최대20자)", id: "title" }]}
            anyway={{ plac: "게시글 내용", value: "작성하기" }}
            base="/board/new "
            after="/board"
          />
        </LoginCheck>
      </section>
    </main>
  )
}
export default Writing
