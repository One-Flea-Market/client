import UserInputComponent from "@/components/userinput"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "One Flea Market | Sign-In",
  description: "원플리마켓 회원가입 페이지"
}

const SignIn = () => {
  return (
    <main className="mx-auto flex flex-col h-[80vh] items-center justify-center [&>*]:font-bold text-center">
      <h1 className="lg:text-3xl w-[70vw] md:w-[45vw] lg:w-[50vw] text-left">Sign-In</h1>
      <UserInputComponent
        settingOption={[
          { plac: "email", type: "email" },
          { plac: "password", type: "password" },
          { plac: "nick name", type: "text" },
          { plac: "phone-number", type: "text" }
        ]}
        pageValue="Sign-in"
        url="/join"
      />
    </main>
  )
}

export default SignIn
//https://velog.io/@skgmlsla/Next.js-13-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-lottie-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%EC%9C%BC%EB%A1%9C-404-%ED%8E%98%EC%9D%B4%EC%A7%80
