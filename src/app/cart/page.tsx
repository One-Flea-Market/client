import LoginCheck from "@/components/loginCheck"
import ProductList from "@/components/productList"
// meta data add
const Cart = () => {
  return (
    <main className="[&>*]:font-bold">
      <LoginCheck>
        <h1 className="text-xl">Cart</h1>
        <ProductList link={`${process.env.SECRET_URL}/cart`} />
      </LoginCheck>
    </main>
  )
}

export default Cart
