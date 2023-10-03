import Icon from "@/components/icon"
import ProductList from "@/components/productList"
import SearchEngine from "@/components/searchEngine"

const Items = ({ searchParams: { search } }: { searchParams: { search: string } }) => {
  return (
    <main className="gird grid-cols-1 [&>*]:font-bold w-full pt-1">
      <section className="flex w-full justify-between mb-3">
        <h1 className="text-xl md:text-3xl">모든상품</h1>
        <SearchEngine mode="items" />
      </section>
      <ProductList link={search ? `/items/search/${search}` : "/items"} />
      <Icon url="/registration" />
    </main>
  )
}
export default Items
