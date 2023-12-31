type url = { url: string }

type path = { link: string; path?: boolean }

type child = { children: ReactNode }

type x = Omit<path, "path"> & Pick<typeof data, "id">

type searchParams = { params: { items_key: string } }

type mode = { mode: "rental" | "transaction" | "board" | "items" }

type atom = Pick<carousel, "list"> & Pick<products, "status">

type search = { params: { board_id: string } }

type notice = { params: { notice_id: string } }

type clearFn = { setState: SetterOrUpdater<boolean> }
