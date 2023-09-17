import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["cyrillic"] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let login = false
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1", { cache: "no-store" })
  ).json()
  //json place holder => "/check"
  // console.log(data)
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="flex w-full justify-between px-3 md:px-16 lg:px-36 py-3 [&>*]:font-bold fixed top-0 shadow-lg bg-white">
          <div>
            <span className="text-xs lg:text-base mr-1">
              <Link href="/" prefetch={false}>
                원플리마켓
              </Link>
            </span>
            <span className="text-xxs lg:[&>*]:text-xs [&>*]:mx-1 [&>*]:text-gray-600">
              {["질문", "거래|대여", "자유 게시판"].map(item => (
                <span key={item} className="hover:text-blue-300">
                  {item}
                </span>
              ))}
            </span>
          </div>
          <div className="text-xs lg:[&>*]:text-base [&>*:nth-child(even)]:mx-5">
            {login ? (
              <>
                <span>admin</span>
                <span>log-out</span>
                <span>cart</span>
              </>
            ) : (
              <>
                {["log-in", "sign-in"].map(item => (
                  <span key={item}>
                    <Link href={item} prefetch={false}>
                      {item}
                    </Link>
                  </span>
                ))}
              </>
            )}
          </div>
        </header>
        <div className="mx-5 lg:mx-36 my-14">{children}</div>
      </body>
    </html>
  )
}
