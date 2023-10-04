import { atom } from "recoil"
import { v1 } from "uuid"

export const itemState = atom({
  key: `itemState ${v1()}`,
  default: true
})

export const boardState = atom({
  key: `boardState ${v1()}`,
  default: false
})
