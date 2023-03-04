import axios from '../lib/axiosConfig'

export const getGenreBooks = async (genre, limit = 30) => {
	try {
		const { data } = await axios.get(`/genres/${genre}/books?limit=${limit}`)
		// const bookList = bookList.map(genre => genre.books)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getTopGenres = async () => {
	try {
		const { data } = await axios.get(`/genres/top/`)
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}
