import Registration from "@/components/registration"

function Register() {
  return (
    <section>
      <Registration
        title="상품 등록"
        value="판매하기"
        type="post"
        url={`${process.env.NEXT_PUBLIC_SECRET_URL}/items/registration`}
      />
    </section>
  )
}
export default Register
