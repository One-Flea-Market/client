import InquiryForm from "./InquiryForm"

const Inquiry = () => {
  return (
    <main className="flex flex-col h-[70%] justify-center">
      <nav>
        <h1 className="my-3 font-bold text-xl">문의하기</h1>
      </nav>
      <section>
        <InquiryForm />
      </section>
    </main>
  )
}

export default Inquiry
