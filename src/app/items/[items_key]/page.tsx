"use client"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import Comment from "@/components/comment"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import useSWR from "swr"
import axios from "axios"
import dynamic from "next/dynamic"
import { useState } from "react"
const Registration = dynamic(() => import("@/components/registration"))
const ItemsDetail = ({ params: { items_key } }: { params: { items_key: string } }) => {
  const data = {
    id: items_key,
    imageList: [
      "https://media.bunjang.co.kr/images/nocrop/1039348912_w1197.jpg",
      "https://media.bunjang.co.kr/images/nocrop/1040164730_w1197.jpg",
      "https://media.bunjang.co.kr/images/nocrop/1036285342_w1197.jpg",
      "https://media.bunjang.co.kr/images/nocrop/1036285313_w1197.jpg"
    ],
    title: "상품 제목입니다.",
    date: "9999-99-99",
    body: "상품 설명입니다.",
    status: "거래",
    price: "50000",
    onself: true,
    onlike: true
  }

  const [state, setState] = useState(true)

  // const {data:a,mutate} = useSWR("")
  return (
    <main>
      {state ? (
        <>
          <nav className="grid grid-cols-1 md:grid-cols-2 mb-3 md:gap-x-5 place-content-center">
            <section>
              <Swiper
                className="h-80 rounded-xl cursor-pointer shadow-sm w-full"
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
              >
                {data.imageList.map(item => (
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
            </section>
            <section className="flex flex-col p-2 [&>*]:mb-5">
              <article className="border-b border-gray-300 [&>*]:mb-3">
                <h1 className="text-2xl max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  {data.title}
                </h1>
                <div className="max-w-full text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  가격: {data.price}
                </div>
              </article>
              <article className="[&>*]:mb-4 border-b border-gray-300 min-h-[40%]">
                <div>상태: {data.status}</div>
                <div>날짜: {data.date}</div>
              </article>
              <article
                className={`grid w-full gap-x-12 -mt-1 ${
                  data.onself ? "grid-cols-2" : "grid-cols-1"
                } p-2 place-content-center`}
              >
                {data.onself ? (
                  <>
                    {["수정", "삭제"].map(item => (
                      <input
                        type="button"
                        key={item}
                        value={item}
                        className="bg-blue-500 rounded-lg text-white h-12 hover:opacity-70"
                        onClick={async () => {
                          if (item === "수정") setState(state => !state)
                          else {
                            if (window.confirm("게시물을 삭제하시겠습니까?"))
                              await axios.delete("/items/id")
                          }
                        }}
                      />
                    ))}
                  </>
                ) : (
                  <div className="w-full flex justify-center">
                    <label
                      htmlFor="likeBtn"
                      className="bg-gray-100 w-[60%] flex justify-center items-center h-12 rounded-lg hover:bg-gray-200"
                      onClick={async () => {
                        // mutate({ ...data, onlike: !data.onlike }, false)
                        // await axios.patch("/상품/id")
                      }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={data.onlike ? "red" : "white"}
                        className="w-7 h-7"
                        whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </motion.svg>
                      <div className="text-blue-500">&nbsp;찜하기</div>
                    </label>
                    <input type="button" id="likeBtn" className="hidden" />
                  </div>
                )}
              </article>
            </section>
          </nav>

          <article className="border-y border-gray-300 min-h-[20rem] my-5 py-2 text-lg break-all ">
            {data.body}
          </article>

          <footer>
            <Comment />
          </footer>
        </>
      ) : (
        <Registration
          title={"상품 수정"}
          imgArr={data.imageList}
          subTitle={data.title}
          price={data.price}
          text={data.body}
          value={"수정하기"}
          current={data.status}
        />
      )}
    </main>
  )
}

export default ItemsDetail
// 수정 삭제및 찜하기 기능구현
