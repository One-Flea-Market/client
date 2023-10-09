"use client"
import axios from "axios"
import { SWRConfig } from "swr"
import { RecoilRoot } from "recoil"

const CustomConfig = ({ children }: child) => {
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher: async (url: string) => await (await axios(url)).data }}>
        <main className="[&>*]:font-bold">{children}</main>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default CustomConfig
