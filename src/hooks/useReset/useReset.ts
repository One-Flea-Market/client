import { useLayoutEffect } from "react"

const useReset = ({ setState }: clearFn) => {
  useLayoutEffect(() => {
    setState(true)
  }, [setState])
}
export default useReset
