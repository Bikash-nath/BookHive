import axios from '../lib/axiosConfig'

export const getBestsellers = async () => {
	try {
		const { data } = await axios.get('/books/bestsellers')
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getTopAudiobooks = async () => {
	try {
		const { data } = await axios.get('/books/audiobooks')
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getLatestBooks = async () => {
	try {
		const { data } = await axios.get('/books/latest/')
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getIndianBooks = async () => {
	try {
		const { data } = await axios.get('/books/indian/')
		return data
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
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const searchBooks = async (keyword = '') => {
	try {
		const { data } = await axios.get(`/books/search?keyword=${keyword}`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getSimilarBooks = async (bookId) => {
	try {
		const { data } = await axios.get(`/books/${bookId}/similar/`)
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
