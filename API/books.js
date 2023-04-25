import axios from '../lib/axiosConfig'

export const getBestsellers = async (query) => {
	try {
		const { data } = await axios.get('/books/bestsellers', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.message ? error.response.data.message : error.message
	}
}

export const getTopAudiobooks = async (query) => {
	try {
		const { data } = await axios.get('/books/audiobooks', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.message ? error.response.data.message : error.message
	}
}

export const getLatestBooks = async (query) => {
	try {
		const { data } = await axios.get('/books/latest/', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.message ? error.response.data.message : error.message
	}
}

//Free books
export const getIndianBooks = async (language) => {
	try {
		const { data } = await axios.get('/books/indian/', { params: { language } })
		return data
	} catch (error) {
		return error.response && error.response.data.message ? error.response.data.message : error.message
	}
}

export const getRegionalBooks = async (language) => {
	try {
		const { data } = await axios.get('/books/regional/', { params: { language } })
		return data
	} catch (error) {
		return error.response && error.response.data.message ? error.response.data.message : error.message
	}
}

export const searchBooks = async (query) => {
	try {
		const { data } = await axios.get('/books/search', { params: query })
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getSearchSuggestions = async (keyword) => {
	try {
		const { data } = await axios.get(`/books/searchSuggestion/`, { params: { keyword } })
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getSimilarBooks = async (bookId, query) => {
	try {
		const { data } = await axios.get(`/books/${bookId}/similar/`, { params: query })
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getBookDetails = async (bookId) => {
	try {
		const { data } = await axios.get(`/books/${bookId}`)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const createBook = async (book) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}

		const { data } = await axios.post(`/books/`, book, { withCredentials: true }, config)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const createBookReview = async (review) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}

		const { data } = await axios.post(`/reviews/`, review, { withCredentials: true }, config)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const updateBookReview = async (review) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}

		const { data } = await axios.patch(`/reviews/${review.reviewId}`, review, { withCredentials: true }, config)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const likeBookReview = async (reviewId) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}

		const { data } = await axios.patch(`/reviews/${reviewId}/like`, {}, { withCredentials: true }, config)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

// export const dislikeBookReview = async () => {
// 	try {
// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Accept: 'application/json',
// 			},
// 		}

// 		const { data } = await axios.patch(`/reviews/${review.reviewId}/dislike`, {}, { withCredentials: true }, config)
// 		return data
// 	} catch (error) {
// 		return error.response?.data.message ? error.response.data.message : error.message
// 	}
// }
