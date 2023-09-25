import SearchEngine from "@/components/searchEngine"
import ProductList from "@/components/productList"
const Transaction = () => {
  return (
    <main className="gird grid-cols-1 [&>*]:font-bold w-full pt-1">
      <section className="flex w-full justify-between mb-3">
        <h1 className="text-xl md:text-3xl">거래</h1>
        <SearchEngine mode="transaction" />
      </section>
      <ProductList />
    </main>
  )
}

export default Transaction
