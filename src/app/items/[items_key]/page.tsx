"use client"
import Comment from "@/components/comment"
import dynamic from "next/dynamic"
import Carousel from "@/components/carousel"
import LoginCheck from "@/components/loginCheck"
import { useRecoilState } from "recoil"
import { itemState } from "@/atoms/itemState"
import useReset from "@/hooks/useReset/useReset"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"
const Registration = dynamic(() => import("@/components/registration"))
const ItemLike = dynamic(() => import("@/components/item/itemLike"))
const ItemBtn = dynamic(() => import("@/components/item/itemBtn"))
const ItemsDetail = ({ params: { items_key } }: searchParams) => {
  const [state, setState] = useRecoilState(itemState)
  const [data, setData] = useState<any>({})
  useReset({ setState })
  useEffect(() => {
    void (async () => {
      setData(
        await (
          await fetch(`${process.env.NEXT_PUBLIC_SECRET_URL}/items/${items_key}`, {
            headers: {
              "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify({ token: getCookie("token") })
          })
        ).json()
      )
    })()
  }, [items_key])
  return (
    <main>
      <LoginCheck>
        {state ? (
          data.Product ? (
            <>
              <nav className="grid grid-cols-1 md:grid-cols-2 mb-3 md:gap-x-5 place-content-center">
                <section>
                  <Carousel list={data.Product[0].image} path />
                </section>
                <section className="flex flex-col p-2 [&>*]:mb-5">
                  <article className="border-b border-gray-300 [&>*]:mb-3">
                    <h1 className="text-2xl max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {data.Product[0].title}
                    </h1>
                    <div className="max-w-full text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                      가격: {data.Product[0].price}
                    </div>
                  </article>
                  <article className="[&>*]:mb-4 border-b border-gray-300 min-h-[40%]">
                    <div>상태: {data.Product[0].status}</div>
                    <div>날짜: {data.Product[0].date}</div>
                  </article>
                  <article
                    className={`grid w-full gap-x-12 -mt-1 ${
                      data.Product[0].onself ? "grid-cols-2" : "grid-cols-1"
                    } p-2 place-content-center`}
                  >
                    {data.Product[0].onself ? (
                      <ItemBtn
                        link={`${process.env.NEXT_PUBLIC_SECRET_URL}/items/${items_key}/delete `}
                      />
                    ) : (
                      <ItemLike
                        items_key={items_key}
                        onlike={data.Product[0].onlike}
                        setData={setData}
                      />
                    )}
                  </article>
                </section>
              </nav>

              <article className="border-y border-gray-300 min-h-[20rem] my-5 py-2 text-lg break-all ">
                {data.Product[0].body}
              </article>

              <footer>
                <Comment url={`${process.env.NEXT_PUBLIC_SECRET_URL}/items/${items_key}/comment`} />
              </footer>
            </>
          ) : null
        ) : (
          <Registration
            title="상품 수정"
            imgArr={data.Product[0].image}
            subTitle={data.Product[0].title}
            price={data.Product[0].price}
            text={data.Product[0].body}
            value="수정하기"
            current={data.Product[0].status}
            type="put"
            url={`${process.env.NEXT_PUBLIC_SECRET_URL}/items/${items_key}/modify `}
          />
        )}
      </LoginCheck>
    </main>
  )
}

export default ItemsDetail
