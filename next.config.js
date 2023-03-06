/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
	// if (phase === PHASE_DEVELOPMENT_SERVER)
	// 	return {
	// 		reactStrictMode: true,
	// 		images: {
	// 			remotePatterns: [
	// 				{
	// 					protocol: 'http',
	// 					hostname: '127.0.0.1',
	// 					port: '5000',
	// 				},
	// 			],
	// 		},
	// 		env: {
	// 			API_URL: 'http://127.0.0.1:5000/api',
	// 			BOOKS_URL: 'http://127.0.0.1:5000/img/books/',
	// 			AUTHORS_URL: 'http://127.0.0.1:5000/img/authors/',
	// 			GENRES_URL: 'http://127.0.0.1:5000/img/genres/',
	// 			USERS_URL: 'http://127.0.0.1:5000/img/users/',
	// 		},
	// 	}

	const hostnames = [
		'bookhive-books.s3.amazonaws.com',
		'bookhive-authors.s3.amazonaws.com',
		'bookhive-genres.s3.amazonaws.com',
		'bookhive-users.s3.amazonaws.com',
	]

	return {
		reactStrictMode: true,
		images: {
			remotePatterns: hostnames.map((hostname) => ({
				protocol: 'https',
				hostname,
			})),
		},
		env: {
			API_URL: 'http://44.213.188.30:3000/api',
			BOOKS_URL: 'https://bookhive-books.s3.amazonaws.com/',
			AUTHORS_URL: 'https://bookhive-authors.s3.amazonaws.com/',
			GENRES_URL: 'https://bookhive-genres.s3.amazonaws.com/',
			USERS_URL: 'https://bookhive-users.s3.amazonaws.com/',
		},
	}
}

module.exports = nextConfig
