type url = { url: string }

type path = { link: string; path?: boolean; page?: number }

type child = { children: ReactNode }

type x = Pick<typeof data, "id"> & { filter: (id: string) => void }

type searchParams = { params: { items_key: string } }

type mode = { mode: "rental" | "transaction" | "board" | "items" }

type atom = Pick<carousel, "list"> & Pick<products, "status">

type search = { params: { board_id: string } }

type notice = { params: { notice_id: string } }

type clearFn = { setState: SetterOrUpdater<boolean> }

type noticeHome = { [key: string]: string }[]

type searchString = {
  [key in mode["mode"] as `${key} text`]?: string
}
