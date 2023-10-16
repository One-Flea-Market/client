import Link from "next/link"
import ProductList from "@/components/productList"
import NoticeList from "@/components/noticeList"
import Carousel from "@/components/carousel"

const Home = async () => {
  const res = [
    "https://media.bunjang.co.kr/images/nocrop/1039348912_w1197.jpg",
    "https://media.bunjang.co.kr/images/nocrop/1040164730_w1197.jpg",
    "https://media.bunjang.co.kr/images/nocrop/1036285342_w1197.jpg",
    "https://media.bunjang.co.kr/images/nocrop/1036285313_w1197.jpg"
  ]
  return (
    <>
      <nav>
        <Carousel list={res} />
      </nav>

      <section className="mt-5">
        <div className="flex w-full justify-between items-baseline [&>*]:font-bold pb-1 border-b border-gray-300">
          <h1 className="text-3xl">공지 사항</h1>
          <div className="text-sm cursor-pointer hover:text-blue-300">
            <Link prefetch={false} href={"/notice"}>
              더보기 &rsaquo;
            </Link>
          </div>
        </div>
        <NoticeList />
      </section>

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
      <ProductList link="/home/product" />
    </>
  )
}
export default Home
