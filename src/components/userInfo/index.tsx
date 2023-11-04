import { cookies } from "next/headers"
const UserInfo = async () => {
  const data = await (
    await fetch(`${process.env.SECRET_URL}/admin`, {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ token: cookies().get("token")?.value })
    })
  ).json()

  return (
    <section className="flex items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-28 h-28 mx-1 md:mx-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="[&>*]:my-2 md:[&>*]:my-3 [&>*]:text-sm md:[&>*]:text-base">
        <div>닉네임: {data.response.username}</div>
        <div>email: {data.response.email}</div>
        <div>가입 날짜: {data.response.date}</div>
        <div>핸드폰: {data.response["phone_number"]}</div>
      </div>
    </section>
  )
}

export default UserInfo
