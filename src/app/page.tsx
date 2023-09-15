"use client"
import { Metadata } from "next"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
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
        className="h-56 bg-orange-500"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      {/* Swiper 옵션 정리 및 조사 (부가기능 및 끝에서 처음으로 등등...) */}
    </>
  )
}
