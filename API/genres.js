import axios from '../lib/axiosConfig'

export const getGenreBooks = async (genre, query) => {
	try {
		const { data } = await axios.get(`/genres/${genre}/books`, { params: query })
		// const bookList = bookList.map(genre => genre.books)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getTopGenres = async () => {
	try {
		const { data } = await axios.get('/genres/top/')
		return data
	} catch (error) {
		return error.response && error.response.data.message
			? error.response.data.message
			: error.message
	}
}
