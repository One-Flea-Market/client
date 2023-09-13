import UserInputComponent from "@/conponents/userinput"

const Login = () => {
  return (
    <main className="mx-auto flex flex-col h-[80vh] items-center justify-center [&>*]:font-bold text-center">
      <h1 className="lg:text-3xl w-[50vw] text-left">Log-In</h1>
      <UserInputComponent
        settingOption={[
          { plac: "email", type: "email" },
          { plac: "password", type: "password" }
        ]}
        pageValue="Log-in"
      />
    </main>
  )
}

export default Login
