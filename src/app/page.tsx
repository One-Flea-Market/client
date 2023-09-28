"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Link from "next/link"
import ProductList from "@/components/productList"

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
      </section>
      <ProductList />
    </>
  )
}
