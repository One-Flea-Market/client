interface userInput {
  settingOption: Pick<inputForm["fromArr"], "plac" | "type">[]
  pageValue: string
  url: string
}

type input = props & Pick<inputForm["fromArr"], "plac" | "type">

type auth = { watch: UseFormWatch<FieldValues> } & Pick<inputForm["fromArr"], "plac">
