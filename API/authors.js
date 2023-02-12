import axios from '../lib/axiosConfig'

export const getTopAuthors = async () => {
	try {
		const res = await axios.get('/authors')
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getAuthorDetails = async (id) => {
	try {
		const res = await axios.get(`/authors/${id}/`)
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getSimilarAuthors = async (id) => {
	try {
		const res = await axios.get(`/authors/${id}/similar/`)
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getAllAuthors = async () => {
	try {
		const res = await axios.get('/authors/all/')
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
