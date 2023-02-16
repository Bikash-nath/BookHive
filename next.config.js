/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		//http://localhost:5000/api/authors
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '5000',
			},
		],
	},
}

module.exports = nextConfig
