"use client"
import Comment from "@/components/comment"
import useSWR from "swr"
import dynamic from "next/dynamic"
import Carousel from "@/components/carousel"
import LoginCheck from "@/components/loginCheck"
import { useRecoilState } from "recoil"
import { itemState } from "@/atoms/itemState"
import useReset from "@/hooks/useReset/useReset"
const Registration = dynamic(() => import("@/components/registration"))
const ItemLike = dynamic(() => import("@/components/item/itemLike"))
const ItemBtn = dynamic(() => import("@/components/item/itemBtn"))
const ItemsDetail = ({ params: { items_key } }: searchParams) => {
  const [state, setState] = useRecoilState(itemState)
  const { data } = useSWR(`/items/${items_key}`)
  useReset({ setState })
  return (
    <main>
      <LoginCheck>
        {state ? (
          <>
            <nav className="grid grid-cols-1 md:grid-cols-2 mb-3 md:gap-x-5 place-content-center">
              <section>
                <Carousel list={data.list} path />
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
                    <ItemBtn link={`/items/${items_key}/delete `} />
                  ) : (
                    <ItemLike items_key={items_key} onlike={data.onlike} />
                  )}
                </article>
              </section>
            </nav>

            <article className="border-y border-gray-300 min-h-[20rem] my-5 py-2 text-lg break-all ">
              {data.body}
            </article>

            <footer>
              <Comment url={`/items/${items_key}/comment`} />
            </footer>
          </>
        ) : (
          <Registration
            title="상품 수정"
            imgArr={data.list}
            subTitle={data.title}
            price={data.price}
            text={data.body}
            value="수정하기"
            current={data.status}
            type="put"
            url={`/items/${items_key}/modify `}
          />
        )}
      </LoginCheck>
    </main>
  )
}

export default ItemsDetail
