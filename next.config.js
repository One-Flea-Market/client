/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.bunjang.co.kr",
                pathname: "/images/nocrop/**"
            },
            {
                protocol: "https",
                hostname: "oneflea.s3.ap-northeast-2.amazonaws.com",
                pathname: "/**"
            }
        ]
    },
    reactStrictMode: false,
}

module.exports = nextConfig
