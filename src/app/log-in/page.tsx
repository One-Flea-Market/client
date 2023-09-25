import UserInputComponent from "@/components/userInput"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "One Flea Market | Log-In",
  description: "원플리마켓 로그인 페이지"
}

const Login = () => {
  return (
    <main className="mx-auto flex flex-col h-[80vh] items-center justify-center [&>*]:font-bold text-center">
      <h1 className="lg:text-3xl  w-[70vw] md:w-[45vw] lg:w-[50vw] text-left">Log-In</h1>
      <UserInputComponent
        settingOption={[
          { plac: "email", type: "email" },
          { plac: "password", type: "password" }
        ]}
        pageValue="Log-in"
        url="/login"
      />
    </main>
  )
}

export default Login
