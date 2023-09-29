import type { Metadata } from "next"
import InputForm from "@/components/inputForm"

export const metadata: Metadata = {
  title: "One Flea Market | Inquiry",
  description: "원플리마켓 문의 페이지 입니다."
}

const Inquiry = () => {
  return (
    <main className="flex flex-col h-[70%] justify-center">
      <nav>
        <h1 className="my-3 font-bold text-xl">문의하기</h1>
      </nav>
      <section>
        <InputForm
          formArr={[
            { type: "text", plac: "제목을 입력하세요. (최대20자)", id: "title" },
            { type: "email", plac: "email" }
          ]}
          anyway={{ plac: "문의 내용", value: "문의하기" }}
          base={"/문의 작성 링크"}
        />
      </section>
    </main>
  )
}

export default Inquiry
