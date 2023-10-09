type commentModify = Record<string, Record<string, boolean | string>>

declare const data = {
  username: "",
  body: "",
  date: "",
  id: "",
  oneself: false
}
type commentConfirm = typeof data & url
