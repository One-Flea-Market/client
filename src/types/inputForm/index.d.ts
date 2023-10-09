interface inputForm {
  formArr: { type: string; plac: string; id: string; defv?: string }[]
  anyway: { plac: string; value: string; defv?: string }
  base: string
  after?: string
  type?: "post" | "patch" | "delete"
}

type content = inputForm["formArr"][number]

type props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

type InputContent = content & props
