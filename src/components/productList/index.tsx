"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import useMore from "@/hooks/useMore"
import Product from "./product"
import XIcon from "./xIcon"
function ProductList({ link }: { link: string }) {
  const pathName = usePathname()
  const [state, setState] = useState({
    list: [
      {
        image: "https://media.bunjang.co.kr/product/236599254_1_1695023021_w856.jpg",
        price: "500000",
        title: "아이패드",
        id: "product1",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/230731027_1_1690016812_w856.jpg",
        price: "50000",
        title: "향수",
        id: "product2",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/234655399_1_1694177830_w856.jpg",
        price: "99000",
        title: "나이키 신발1",
        id: "product3",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/235421896_1_1694528121_w856.jpg",
        price: "99000",
        title: "나이키 신발2",
        id: "product4",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/213028551_1_1675003109_w856.jpg",
        price: "500000",
        title: "나이키 신발3",
        id: "product5",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/236756069_1_1695030007_w856.jpg",
        price: "260000",
        title: "에어팟",
        id: "product6",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/236375090_1_1695009443_w856.jpg",
        price: "300000",
        title: "지갑1",
        id: "product7",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/226960553_1_1695029262_w856.jpg",
        price: "700000",
        title: "지갑2",
        id: "product8",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/233776797_1_1694610185_w856.jpg",
        price: "350000",
        title: "바람 막이",
        id: "product9",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/236455404_1_1694776916_w856.jpg",
        price: "500000",
        title: "가디건",
        id: "product10",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/229499051_1_1689041967_w856.jpg",
        price: "290000",
        title: "기타",
        id: "product11",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/229804329_1_1692870733_w856.jpg",
        price: "330000",
        title: "피아노",
        id: "product12",
        status: "거래"
      }
    ],
    next: true
  })
  // const {state,setState,better ,filter} = useMore({ link })
  return (
    <>
      <section className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-3 [&>*]:font-bold">
        {state.list.map(item => (
          <div key={item.id} className="relative">
            <Link href={`/items/${item.id}`} prefetch={false}>
              <Product {...item} />
            </Link>

            {pathName === "/cart" ? <XIcon id={item.id} /> : null}
          </div>
        ))}
      </section>

      <footer className="w-full flex justify-center mt-5">
        {state.next && (
          <input
            type="button"
            value="More &#8897;"
            className="bg-blue-500 w-[70%] font-bold text-white text-xl rounded-xl hover:opacity-70 h-10"
            // onClick={better}
          />
        )}
      </footer>
    </>
  )
}

export default ProductList
