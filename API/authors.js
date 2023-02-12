import axios from 'axios'

export const getTopAuthors = () => async () => {
	try {
		const { data } = await axios.get('/api/authors/top/')

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getAuthorDetails = (id) => async () => {
	try {
		const { data } = await axios.get(`/api/authors/${id}/`)

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getSimilarAuthors = (id) => async () => {
	try {
		const { data } = await axios.get(`/api/authors/${id}/similar/`)

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getAllAuthors = () => async () => {
	try {
		const { data } = await axios.get('/api/authors/all/')

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
