import { atom } from "recoil"
import { v1 } from "uuid"

export const registration = atom({
  key: `registration ${v1()}`,
  default: {
    list: [],
    status: ""
  }
})
