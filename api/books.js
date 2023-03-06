import axios from '../lib/axiosConfig'

export const getBestsellers = async (limit = 30) => {
	try {
		const { data } = await axios.get(`/books/bestsellers?limit=${limit}`)
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getTopAudiobooks = async (limit) => {
	try {
		const { data } = await axios.get(`/books/audiobooks?limit=${limit}`)
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getLatestBooks = async (limit) => {
	try {
		const { data } = await axios.get(`/books/latest/?limit=${limit}`)
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getIndianBooks = async (limit) => {
	try {
		const { data } = await axios.get(`/books/indian/?limit=${limit}`)
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const searchBooks = async (keyword = '', limit = 30) => {
	try {
		const { data } = await axios.get(`/books/search?keyword=${keyword}&limit=${limit}`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getSimilarBooks = async (bookId) => {
	try {
		const { data } = await axios.get(`/books/${bookId}/similar/?limit=${limit}`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getBookDetails = async (bookId) => {
	try {
		const { data } = await axios.get(`/books/${bookId}`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const createBookReview = async (bookId, review) => {
	try {
		// const  { userInfo } or cookie = getState()
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}
		const { data } = await axios.post(`/books/${bookId}/reviews/`, review, config)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}
