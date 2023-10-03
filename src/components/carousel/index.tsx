"use client"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

const Carousel = ({ list, path }: { list: string[]; path?: boolean }) => {
  return (
    <Swiper
      className={`${path ? "h-80 w-full" : "h-56"} rounded-xl cursor-pointer shadow-sm`}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={path ? 20 : 50}
      slidesPerView={1}
      loop={!path && true}
      pagination={{ clickable: true }}
      navigation={path && true}
      autoplay={!path && { delay: 5000, disableOnInteraction: true }}
    >
      {list.length &&
        list.map(item => (
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
  )
}
export default Carousel
