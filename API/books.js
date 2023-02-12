import axios from 'axios'

export const getBestSellerBooks = () => async () => {
	try {
		const { data } = await axios.get('/api/books/bestseller/')

		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getIndianBooks = () => async () => {
	try {
		const { data } = await axios.get('/api/books/indian/')

		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getGenreBooks = (genre) => async () => {
	try {
		const { data } = await axios.get(`/api/books/genre/${genre}`)
		let bookList = []
		bookList = bookList.concat(...data.map((obj) => obj.books))

		return bookList
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const searchBooks =
	(keyword = '') =>
	async () => {
		try {
			const { data } = await axios.get(`/api/books/search${keyword}`)

			return data
		} catch (error) {
			return error.response?.data.error_message ? error.response.data.error_message : error.message
		}
	}

export const getSimilarBooks = (id) => async () => {
	try {
		const { data } = await axios.get(`/api/books/${id}/similar/`)

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const getBookDetails = (id) => async () => {
	try {
		const { data } = await axios.get(`/api/books/${id}`)

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const createBookReview = (bookId, review) => async () => {
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
		const { data } = await axios.post(`/api/books/${bookId}/reviews/`, review, config)

		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
