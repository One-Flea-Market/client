import LoginCheck from "@/components/loginCheck"
import ProductList from "@/components/productList"
import UserInfo from "@/components/userInfo"

const Admin = () => {
  return (
    <main className="[&>*]:font-bold">
      <LoginCheck>
        <h1 className="text-3xl">My page</h1>
        <section className="flex w-full mb-4 bg-gray-100 my-4 p-5 [&>*]:mx-3 rounded-lg h-44 justify-center items-center">
          <UserInfo />
        </section>
        <section className="pt-4 border-t border-gray-300">
          <h3>등록한 거래/대여 상품</h3>
          <ProductList link="/admin/product" />
        </section>
      </LoginCheck>
    </main>
  )
}

export default Admin
