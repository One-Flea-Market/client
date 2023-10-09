import { atom } from "recoil"
import { v1 } from "uuid"

export const commentModify = atom<commentModify>({
  key: `commentModify ${v1()}`,
  default: {}
})
