import UserInputComponent from "@/components/userInput/index"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "One Flea Market | Log-In",
  description: "원플리마켓 로그인 페이지"
}

const Login = () => {
  return (
    <main className="mx-auto flex flex-col h-[80vh] items-center justify-center [&>*]:font-bold text-center">
      <h1 className="lg:text-3xl  w-[70vw] md:w-[60vw] text-left">Log-In</h1>
      <UserInputComponent
        settingOption={[
          { plac: "e-mail", type: "email" },
          { plac: "password", type: "password" }
        ]}
        pageValue="Log-in"
        url="/login"
      />
    </main>
  )
}

export default Login
