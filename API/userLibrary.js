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

export const getLibraryBooks = async () => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.get('/users/library/books/', { withCredentials: true }, config)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const favouriteBook = async (book) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch(
			'/users/library/favourite/book/',
			{ book },
			{ withCredentials: true },
			config
		)
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

export const followAuthor = async (author) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch(
			'/users/library/follow/author/',
			{ author },
			{ withCredentials: true },
			config
		)
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

export const favouriteGenre = async (genre) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		const res = await axios.patch(
			'/users/library/favourite/genre/',
			{ genre },
			{ withCredentials: true },
			config
		)
		return res.data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}
