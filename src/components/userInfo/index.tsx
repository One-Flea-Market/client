const UserInfo = async () => {
  const data = {
    username: "유저1",
    email: "user1@naver.com",
    date: "9999-99-99",
    "phone-number": "999-9999-9999"
  }

  //   const data = await(await fetch("/admin")).json()
  return (
    <section>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-28 h-28 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="[&>*]:my-2 md:[&>*]:my-3 [&>*]:text-sm md:[&>*]:text-base">
        <div>닉네임: {data.username}</div>
        <div>email: {data.email}</div>
        <div>가입 날짜: {data.date}</div>
        <div>핸드폰: {data["phone-number"]}</div>
      </div>
    </section>
  )
}

export default UserInfo
