import ProductList from "@/components/productList"
import SearchEngine from "@/components/searchEngine"
import Icon from "@/components/icon"

const Rental = ({ searchParams }: any) => {
  // console.log(searchParams)
  return (
    <main className="gird grid-cols-1 [&>*]:font-bold w-full pt-1">
      <section className="flex w-full justify-between mb-3">
        <h1 className="text-xl md:text-3xl">대여</h1>
        <SearchEngine mode="rental" />
      </section>
      <ProductList />
      <Icon url="/registration" />
    </main>
  )
}

export default Rental
