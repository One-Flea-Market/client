import "./globals.css"
import type { Metadata } from "next"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "one flea market | home",
  description: "거래 플랫폼"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <header className="flex w-full justify-between px-36 py-3 [&>*]:font-bold fixed top-0 shadow-lg">
          <div>
            <span className="text-base mr-1">원플리마켓</span>
            <span className="[&>*]:text-xs [&>*]:mx-1 [&>*]:text-gray-600">
              {["질문", "거래|대여", "자유 게시판"].map(item => (
                <span key={item} className="hover:text-blue-300">
                  {item}
                </span>
              ))}
            </span>
          </div>
          <div className="[&>*:nth-child(even)]:mx-5">
            <span>admin</span>
            <span>logout</span>
            <span>cart</span>
          </div>
        </header>
        <div className="mx-36 my-14">{children}</div>
      </body>
    </html>
  )
}
