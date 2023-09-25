"use client"
import axios from "axios"
import { ReactNode } from "react"
import { SWRConfig } from "swr"

const CustomConfig = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig value={{ fetcher: async (url: string) => await (await axios(url)).data }}>
      {children}
    </SWRConfig>
  )
}

export default CustomConfig
