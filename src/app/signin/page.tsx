import UserInputComponent from "@/conponents/userinput"

const SignIn = () => {
  return (
    <main className="mx-auto flex flex-col h-[80vh] items-center justify-center [&>*]:font-bold text-center">
      <h1 className="lg:text-3xl w-[50vw] text-left">Sign-In</h1>
      <UserInputComponent
        settingOption={[
          { plac: "email", type: "email" },
          { plac: "password", type: "password" },
          { plac: "name", type: "text" },
          { plac: "phone-number", type: "text" }
        ]}
        pageValue="Sign-in"
      />
    </main>
  )
}

export default SignIn
