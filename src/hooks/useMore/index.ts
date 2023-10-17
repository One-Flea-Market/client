"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useLayoutEffect } from "react"

const useMore = <str extends "board" | "product">({ link }: Pick<path, "link">) => {
  const [state, setState] = useState<moreDataType<str>>({ list: [] })
  const { back, refresh } = useRouter()
  useLayoutEffect(() => {
    void (async () => {
      try {
        setState(await (await axios(link)).data)
      } catch {
        back()
      }
    })()
  }, [back, setState, link])

  const better = async () => {
    try {
      const data = await (await axios(link)).data
      return setState(state => ({ ...state, ...data }))
    } catch {
      refresh()
    }
  }

  const filter = (id: string) => {
    //@ts-ignore
    setState(state => {
      return { list: state.list.filter(item => item.id !== id) }
    })
  }

  return { state, better, filter }
}

export default useMore
