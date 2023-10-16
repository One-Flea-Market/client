import UserInputComponent from "@/components/userInput"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "One Flea Market | Sign-In",
  description: "원플리마켓 회원가입 페이지"
}

const SignIn = () => {
  return (
    <main className="mx-auto flex flex-col h-[80vh] items-center justify-center [&>*]:font-bold text-center">
      <h1 className="lg:text-3xl w-[70vw] md:w-[60vw] text-left pt-5 lg:pt-0">Sign-In</h1>
      <UserInputComponent
        settingOption={[
          { plac: "email", type: "email" },
          { plac: "username", type: "text" },
          { plac: "password", type: "password" },
          { plac: "phone-number", type: "text" }
        ]}
        pageValue="Sign-in"
        url="/sign-in"
      />
    </main>
  )
}

export default SignIn
