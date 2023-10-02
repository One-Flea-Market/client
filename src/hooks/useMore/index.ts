import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useLayoutEffect } from "react"

interface listData {
  list: { [key: string]: string | boolean }[]
  next?: boolean
}

const useMore = ({ link }: { link: string }) => {
  const [state, setState] = useState<listData>({ list: [] })
  const { back } = useRouter()
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
    const data = await (await axios(link)).data
    return setState(state => ({ ...state, ...data }))
  }

  const filter = (id: string) =>
    setState(state => {
      return { list: state.list.filter(item => item.id !== id) }
    })

  return { state, setState, better, filter }
}

export default useMore
