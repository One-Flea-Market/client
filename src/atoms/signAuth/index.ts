import { atom } from "recoil"
import { v1 } from "uuid"

export const signState = atom<Record<string, boolean>>({
  key: `state ${v1()}`,
  default: {
    email: false,
    authState: false,
    username: false
  }
})

export const signAuth = atom({
  key: `state ${v1()}`,
  default: ""
})
