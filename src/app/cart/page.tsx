import ProductList from "@/components/productList"

const Cart = () => {
  return (
    <main className="[&>*]:font-bold">
      <h1 className="text-xl">Cart</h1>
      <ProductList url="/cart" />
    </main>
  )
}

export default Cart
