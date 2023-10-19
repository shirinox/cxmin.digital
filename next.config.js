const withMDX = require("@next/mdx")()
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        outputFileTracingIncludes: {
            '/blogs': ['./blogs/*']
        }
    }
}

module.exports = withMDX(nextConfig)
