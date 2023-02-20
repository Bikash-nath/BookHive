import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.API_URL,
	headers: { 'Content-type': 'application/json' },
	timeout: 5000,
})

export default instance
