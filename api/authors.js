import axios from '../lib/axiosConfig'

export const getTopAuthors = async (query) => {
	try {
		const { data } = await axios.get('/authors/top', { params: query })
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getAuthorDetails = async (authorId, query) => {
	try {
		const { data } = await axios.get(`/authors/${authorId}/`, { params: query })
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

// export const getSimilarAuthors = async (authorId, query) => {
// 	try {
// 		const { data } = await axios.get(`/authors/${authorId}/similar/`, { params: query })
// 		return data
// 	} catch (error) {
// 		return error.response?.data.message ? error.response.data.message : error.message
// 	}
// }
