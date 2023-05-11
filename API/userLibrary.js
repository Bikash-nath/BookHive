import axios from '../lib/axiosConfig'

export const createUserLibrary = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.post(
			'/users/library/',
			{},
			{
				withCredentials: true,
			},
			config
		)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getUserLibrary = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.get(
			'/users/library/',
			{
				withCredentials: true,
			},
			config
		)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getReadHistory = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.get('/users/library/readHistory/', { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const addReadHistory = async (bookId) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch('/users/library/addReadHistory/', { bookId }, { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const removeReadHistory = async (bookId) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch(
			'/users/library/removeReadHistory/',
			{ bookId },
			{ withCredentials: true },
			config
		)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getLibraryBooks = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.get('/users/library/books', { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const favouriteBook = async (bookId) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch('/users/library/favourite/book/', { bookId }, { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getLibraryAuthors = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.get('/users/library/authors/', { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const followAuthor = async (authorId) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch('/users/library/follow/author/', { authorId }, { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const getLibraryGenres = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.get('/users/library/genres/', { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const favouriteGenre = async (genreId) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch('/users/library/favourite/genre/', { genreId }, { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}
