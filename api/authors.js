import axios from '../lib/axiosConfig'

export const getTopAuthors = async (limit = 30) => {
	try {
		const { data } = await axios.get(`/authors/top?limit=${limit}`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getAuthorDetails = async (authorId) => {
	try {
		const { data } = await axios.get(`/authors/${authorId}/`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getSimilarAuthors = async (authorId) => {
	try {
		const { data } = await axios.get(`/authors/${authorId}/similar/`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

// export const getAllAuthors = async () => {
// 	try {
// 		const { data } = await axios.get('/authors/all/')
// 		return data
// 	} catch (error) {
// 		return error.response?.data.error_message ? error.response.data.error_message : error.message
// 	}
// }
