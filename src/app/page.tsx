"use client"
import { Metadata } from "next"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Link from "next/link"

export const metadata: Metadata = {
  title: "One Flea Market | Home",
  description: "원플리마켓 입니다."
}

export default function Home() {
  return (
    <>
      <Swiper
        className="h-56 rounded-xl cursor-pointer shadow-sm"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        {[
          "https://media.bunjang.co.kr/images/nocrop/1039348912_w1197.jpg",
          "https://media.bunjang.co.kr/images/nocrop/1040164730_w1197.jpg",
          "https://media.bunjang.co.kr/images/nocrop/1036285342_w1197.jpg",
          "https://media.bunjang.co.kr/images/nocrop/1036285313_w1197.jpg"
        ].map(item => (
          <SwiperSlide key={item} className="w-full [&>*]:w-full [&>*]:h-full ">
            <Image
              src={item}
              alt={""}
              width={500}
              height={500}
              loading="lazy"
              className="w-auto h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <nav className="mt-5">
        <div className="flex w-full justify-between items-baseline [&>*]:font-bold pb-1 border-b border-gray-300">
          <h1 className="text-3xl">공지 사항</h1>
          <div className="text-sm cursor-pointer hover:text-blue-300">
            <Link prefetch={false} href={"/notice"}>
              더보기 &rsaquo;
            </Link>
          </div>
        </div>
        <div className="[&>*]:py-3 [&>*]:font-bold">
          {[
            { title: "거래규칙1", date: "1999-99-99", id: "v1" },
            { title: "거래규칙2", date: "1999-99-99", id: "v2" },
            { title: "거래규칙3", date: "1999-99-99", id: "v3" }
          ].map((item, index) => (
            <Link href={`/notice/${item.id}`} prefetch={false} key={item.title}>
              <article
                key={item.title}
                className="hover:bg-gray-100 flex w-full justify-between items-center cursor-pointer border-b border-gray-300 h-10"
              >
                <div className="w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
                  {index + 1}. {item.title}
                </div>
                <div className="text-xs">{item.date}</div>
              </article>
            </Link>
          ))}
        </div>
      </nav>

      <section className="mt-5">
        <article className="flex w-full justify-between items-baseline [&>*]:font-bold pb-1 border-b border-gray-300">
          <h1 className="text-3xl">Items</h1>
          <div className="text-sm cursor-pointer hover:text-blue-300">
            <Link prefetch={false} href={"/items"}>
              더보기 &rsaquo;
            </Link>
          </div>
        </article>

        <article className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-3 [&>*]:font-bold">
          {[
            {
              image: "https://media.bunjang.co.kr/product/236599254_1_1695023021_w856.jpg",
              price: "500000",
              title: "아이패드",
              key: "product1",
              status: "대여"
            },
            {
              image: "https://media.bunjang.co.kr/product/230731027_1_1690016812_w856.jpg",
              price: "50000",
              title: "향수",
              key: "product2",
              status: "대여"
            },
            {
              image: "https://media.bunjang.co.kr/product/234655399_1_1694177830_w856.jpg",
              price: "99000",
              title: "나이키 신발1",
              key: "product3",
              status: "대여"
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
              status: "대여"
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
              status: "대여"
            },
            {
              image: "https://media.bunjang.co.kr/product/236455404_1_1694776916_w856.jpg",
              price: "500000",
              title: "가디건",
              key: "product10",
              status: "대여"
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
              status: "대여"
            }
          ].map(item => (
            <Link href={`/items/${item.key}`} prefetch={false} key={item.key}>
              <motion.div
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
              </motion.div>
            </Link>
          ))}
        </article>
      </section>

      <form
        onSubmit={e => e.preventDefault()}
        className="mt-8 w-full flex items-center justify-center"
      >
        <input
          type="submit"
          value="More &#8897;"
          className="bg-blue-500 w-[70%] font-bold text-white text-xl rounded-xl hover:opacity-70 h-10"
        />
      </form>
    </>
  )
}
