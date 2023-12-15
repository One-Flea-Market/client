"use client"
import Link from "next/link"
import useMore from "@/hooks/useMore"
import Product from "./product"
import XIcon from "./xIcon"
function ProductList({ link }: path) {
  const { state, better, filter } = useMore<"product">({ link })
  return (
    <>
      <section className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-3 [&>*]:font-bold">
        {state.list.map(item => (
          <div key={item.id} className="relative">
            <Link href={`/items/${item.id}`} prefetch={false}>
              <Product {...item} />
            </Link>

            {link.includes("cart") ? <XIcon id={item.id} filter={filter} /> : null}
          </div>
        ))}
      </section>

      {!link.includes("cart") && !link.includes("admin") && (
        <footer className="w-full flex justify-center mt-5">
          {state.next && (
            <input
              type="button"
              value="More &#8897;"
              className="bg-blue-500 w-[70%] font-bold text-white text-xl rounded-xl hover:opacity-70 h-10 outline-none"
              onClick={better}
            />
          )}
        </footer>
      )}
    </>
  )
}

export default ProductList
