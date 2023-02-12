import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:5000/api',
	headers: { 'X-Requested-With': 'XMLHttpRequest' },
	timeout: 1000,
})

export default instance
