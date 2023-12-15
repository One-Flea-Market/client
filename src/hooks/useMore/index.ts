"use client"
import axios from "axios"
import { useState, useLayoutEffect } from "react"
import { getCookie } from "cookies-next"
const useMore = <str extends "board" | "product">({ link }: Pick<path, "link">) => {
  const [state, setState] = useState<moreDataType<str>>({ list: [] })
  useLayoutEffect(() => {
    void (async () => {
      try {
        const liter = link.includes("admin") || link.includes("cart")
        const tagged = liter || link.includes("home")
        setState(
          await (
            await axios(`${tagged ? link : `${link}/page/0`}`, {
              headers: { "Content-Type": "application/json" },
              method: liter ? "post" : "get",
              data: liter ? { token: getCookie("token") } : null
            })
          ).data
        )
      } catch {
        window.location.reload()
      }
    })()
  }, [link])

  const better = async () => {
    try {
      const { list, next } = await (await axios(`${link}/page/${(state.page as number) + 1}`)).data
      return setState(state => ({ next, list: [...state.list, ...list] }))
    } catch {
      window.location.reload()
    }
  }

  const filter = (id: string) => {
    setState(state => {
      const list = [...(state.list.filter(item => item.id !== id) as any)]
      return { ...state, list }
    })
    axios.delete(`${link}/${id}`, { data: { token: getCookie("token") } })
  }

  return { state, better, filter }
}

export default useMore
