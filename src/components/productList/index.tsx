"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useSearchParams, usePathname } from "next/navigation"
import { useLayoutEffect, useState } from "react"
import axios from "axios"
function ProductList() {
  const { get } = useSearchParams()
  const pathName = usePathname()
  const [state, setState] = useState({
    list: [
      {
        image: "https://media.bunjang.co.kr/product/236599254_1_1695023021_w856.jpg",
        price: "500000",
        title: "아이패드",
        key: "product1",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/230731027_1_1690016812_w856.jpg",
        price: "50000",
        title: "향수",
        key: "product2",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/234655399_1_1694177830_w856.jpg",
        price: "99000",
        title: "나이키 신발1",
        key: "product3",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/235421896_1_1694528121_w856.jpg",
        price: "99000",
        title: "나이키 신발2",
        key: "product4",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/213028551_1_1675003109_w856.jpg",
        price: "500000",
        title: "나이키 신발3",
        key: "product5",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/236756069_1_1695030007_w856.jpg",
        price: "260000",
        title: "에어팟",
        key: "product6",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/236375090_1_1695009443_w856.jpg",
        price: "300000",
        title: "지갑1",
        key: "product7",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/226960553_1_1695029262_w856.jpg",
        price: "700000",
        title: "지갑2",
        key: "product8",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/233776797_1_1694610185_w856.jpg",
        price: "350000",
        title: "바람 막이",
        key: "product9",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/236455404_1_1694776916_w856.jpg",
        price: "500000",
        title: "가디건",
        key: "product10",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/229499051_1_1689041967_w856.jpg",
        price: "290000",
        title: "기타",
        key: "product11",
        status: "거래"
      },
      {
        image: "https://media.bunjang.co.kr/product/229804329_1_1692870733_w856.jpg",
        price: "330000",
        title: "피아노",
        key: "product12",
        status: "거래"
      }
    ],
    next: true
  })
  useLayoutEffect(() => {
    void (async () => {
      await (
        await axios(
          `/${pathName.slice(1, pathName.length) ? pathName.slice(1, pathName.length) : "main"}${
            get("search") ? "/" + get("search") : ""
          }`
        )
      ).data
    })()
  }, [get, pathName])

  return (
    <>
      <section className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-3 [&>*]:font-bold">
        {state.list.map(item => (
          <Link href={`/items/${item.key}`} prefetch={false} key={item.key}>
            <motion.article
              whileHover={{ scale: 0.9, transition: { duration: 0.25, type: "keyframes" } }}
              className="shadow-xl p-2 rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg"
              />
              <div className="flex justify-between items-center pl-2">
                <div className="max-w-[70%]">
                  <div className="mt-2 w-full overflow-hidden whitespace-nowrap text-ellipsis text-xxs md:text-sm">
                    {item.title}
                  </div>
                  <div className="mt-1 flex [&>*]:text-xxs md:[&>*]:text-base">
                    <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.price}
                    </div>
                    <span>원</span>
                  </div>
                </div>

                <div className="text-xxs md:text-base font-bold">{item.status}</div>
              </div>
            </motion.article>
          </Link>
        ))}
      </section>

      <footer className="w-full flex justify-center mt-5">
        {state.next && (
          <input
            type="button"
            value="More &#8897;"
            className="bg-blue-500 w-[70%] font-bold text-white text-xl rounded-xl hover:opacity-70 h-10"
            onClick={async () => {
              // const data = await (
              //   await axios(
              //     `/${pathName.slice(1, pathName.length) ? pathName.slice(1, pathName.length) : "main"}${
              //       get("search") ? "/" + get("search") : ""
              //     }`
              //   )
              // ).data
              // setState(state=>{
              //   return {list:[...state.list,...data.list],next:data.next}
              // })
            }}
          />
        )}
      </footer>
    </>
  )
}

export default ProductList