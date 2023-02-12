import axios from '../lib/axiosConfig'

export const getTopBooks = async () => {
	try {
		const res = await axios.get('/books/')
		return res.data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getIndianBooks = async () => {
	try {
		const res = await axios.get('/books/indian/')
		return res.data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getGenreBooks = async (genre) => {
	try {
		const res = await axios.get(`/books/genre/${genre}`)

		let bookList = []
		// bookList = bookList.concat(...data.map((obj) => obj.books))

		return bookList
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const searchBooks = async (keyword = '') => {
	try {
		const res = await axios.get(`/books/search${keyword}`)
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getSimilarBooks = async (id) => {
	try {
		const res = await axios.get(`/books/${id}/similar/`)

		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getBookDetails = async (id) => {
	try {
		const res = await axios.get(`/books/${id}`)
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const createBookReview = async (bookId, review) => {
	try {
		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		}
		const res = await axios.post(`/books/${bookId}/reviews/`, review, config)
		return res.data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
