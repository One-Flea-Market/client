"use client"
import { Metadata } from "next"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export const metadata: Metadata = {
  title: "One Flea Market | Home",
  description: "원플리마켓 입니다."
}

export default function Home() {
  return (
    <>
      <Swiper
        className="h-56 bg-orange-200 rounded-xl cursor-pointer "
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        <SwiperSlide className="">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      {/* 실제 이미지 넣고 테스트하기 */}

      <nav className="mt-5">
        <div className="flex w-full justify-between items-baseline [&>*]:font-bold pb-1 border-b border-gray-300">
          <h1 className="text-3xl">공지 사항</h1>
          <div className="text-sm cursor-pointer">더보기</div>
        </div>
        <div className="[&>*]:py-3 [&>*]:font-bold">
          {[
            { title: "거래규칙1", date: "1999-99-99" },
            { title: "거래규칙2", date: "1999-99-99" },
            { title: "거래규칙3", date: "1999-99-99" }
          ].map((item, index) => (
            // <Link key={item.title}>
            <div
              key={item.title}
              className="flex w-full justify-between cursor-pointer border-b border-gray-300 "
            >
              <div>
                {index + 1}. {item.title}
              </div>
              <div>{item.date}</div>
            </div>
            // </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
