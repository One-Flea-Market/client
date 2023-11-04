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
  }, [setState, link])

  const better = async () => {
    try {
      const { list, next } = await (await axios(`${link}/page/${(state.page as number) + 1}`)).data
      return setState(state => ({ next, list: [...state.list, ...list] }))
    } catch {
      window.location.reload()
    }
  }

  const filter = (id: string) => {
    const list = state.list.filter(item => item.id !== id) as multifulData<str>
    setState({ list })
    axios.delete(`${link}/${id}`, {
      data: { token: getCookie("token") }
    })
    // window.location.reload()
  }

  return { state, better, filter }
}

export default useMore
