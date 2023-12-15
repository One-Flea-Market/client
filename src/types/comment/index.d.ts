type commentModify = Record<string, Record<string, boolean | string>>

type commentConfirm = typeof data & url & { setState: Dispatch<SetStateAction<commentModify>> }

type comment = (typeof data)[]
