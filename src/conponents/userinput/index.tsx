const UserInputComponent = ({
  settingOption,
  pageValue
}: {
  settingOption: Record<string, string>[]
  pageValue: string
}) => {
  return (
    <form className="flex justify-center">
      <div className="flex flex-col mt-5 [&>*]:w-[45vw] [&>*]:mb-3">
        {settingOption.map(item => (
          <input
            key={item.plac}
            type={item.type}
            className="outline-none border-4 border-blue-300 h-[40%] rounded-xl p-2 text-lg"
            placeholder={item.plac}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-3">
        <input
          type="submit"
          value={pageValue}
          className="bg-blue-600 p-2 rounded-lg h-12 ml-4 text-white hover:opacity-70"
        />
      </div>
    </form>
  )
}
export default UserInputComponent
