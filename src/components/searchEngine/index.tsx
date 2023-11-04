"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const SearchEngine = ({ mode }: mode) => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm()

  const valied = (data: searchString) => push(`/${mode}?search=${data[`${mode} text`]}`)

  return (
    <form className="flex relative justify-end -mt-1" onSubmit={handleSubmit(valied)}>
      <input
        type="text"
        placeholder="제목 검색(최소1자)"
        className="border-4 border-blue-300 outline-none py-1 pl-1 pr-8 rounded-lg w-[80%] md:w-full"
        {...register(`${mode} text`, {
          minLength: 1,
          required: true
        })}
      />
      <label
        htmlFor="searchSubmit"
        className="cursor-pointer absolute right-2 bg-white hover:text-blue-300 top-[0.5rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </label>
      <input type="submit" id="searchSubmit" className="hidden" />
    </form>
  )
}

export default SearchEngine
