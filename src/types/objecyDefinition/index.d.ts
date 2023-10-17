declare const data = { username: "", body: "", date: "", id: "", oneself: false } // comment

declare const data1 = [{ title: "", date: "", id: "" }] // board and notice

declare const data2 = [{ image: "", price: "", title: "", id: "", status: "" }] // product

type multifulData<str> = str extends "board" ? typeof data1 : typeof data2

interface moreDataType<resType> {
  list: multifulData<resType>
  next?: boolean
}
