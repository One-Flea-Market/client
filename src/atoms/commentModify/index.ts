import { atom, selector } from "recoil"
import { v1 } from "uuid"

export const commentModify = atom<Record<string, Record<string, boolean | string>>>({
  key: `commentModify ${v1()}`,
  default: {}
})
