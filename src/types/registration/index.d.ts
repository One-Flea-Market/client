interface registration {
  title: string
  imgArr?: string[]
  subTitle?: string
  price?: string
  text?: string
  value: string
  current?: string
  type?: inputForm["type"] | "put"
  url: string
}

type titleInput = { value: registration["value"] } & props & inputForm["formArr"][number]
