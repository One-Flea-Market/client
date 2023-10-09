import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import CustomConfig from "@/components/customConfig"
const inter = Inter({ subsets: ["cyrillic"] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let login = true
  // const {login} = await (await fetch("/check", { cache: "no-store" })).json()
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="z-10 flex w-full justify-between px-3 md:px-16 lg:px-36 py-3 [&>*]:font-bold fixed top-0 shadow-lg bg-white">
          <div>
            <span className="text-xs lg:text-base mr-1 hover:text-blue-300">
              <Link href="/" prefetch={false}>
                원플리마켓
              </Link>
            </span>
            <span className="text-xxs lg:[&>*]:text-xs [&>*]:mx-1 [&>*]:text-gray-600">
              {[
                { link: "inquiry", title: "문의" },
                { link: "transaction", title: "거래" },
                { link: "rental", title: "대여" },
                { link: "board", title: "자유 게시판" }
              ].map(item => (
                <Link key={item.title} href={`/${item.link}`} prefetch={false}>
                  <span className="hover:text-blue-300">{item.title}</span>
                </Link>
              ))}
            </span>
          </div>
          <div className="text-xs lg:[&>*]:text-base [&>*:nth-child(even)]:mx-5 ">
            {login ? (
              <>
                {["admin", "log_out", "cart"].map(item => (
                  <Link key={item} href={`/${item}`} prefetch={false}>
                    <span className="hover:text-blue-300">{item}</span>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {["log-in", "sign-in"].map(item => (
                  <span key={item} className="hover:text-blue-300">
                    <Link href={`/${item}`} prefetch={false}>
                      {item}
                    </Link>
                  </span>
                ))}
              </>
            )}
          </div>
        </header>
        <div className="mx-5 lg:mx-36 my-16">
          <CustomConfig>{children}</CustomConfig>
        </div>
      </body>
    </html>
  )
}
