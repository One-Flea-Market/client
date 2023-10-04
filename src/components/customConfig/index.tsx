"use client"
import axios from "axios"
import { ReactNode } from "react"
import { SWRConfig } from "swr"
import { RecoilRoot } from "recoil"

const CustomConfig = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher: async (url: string) => await (await axios(url)).data }}>
        <main className="[&>*]:font-bold">{children}</main>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default CustomConfig
