import Icon from "@/components/icon"
import ProductList from "@/components/productList"

const Items = () => {
  return (
    <section>
      <h1 className="text-3xl my-2">모든 상품</h1>
      <ProductList />
      <footer>
        <Icon url="/registration" />
      </footer>
    </section>
  )
}
export default Items
