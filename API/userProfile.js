import axios from '../lib/axiosConfig'

export const login = async (username, password) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}
		username = username.split('@')[0]
		const { data } = await axios.post('/users/login/', { username, password }, config)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const logout = () => () => {
	localStorage.removeItem('userInfo')
}

export const signup = async (name, email, password, confirmPassword) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}

		const { data } = await axios.post(
			'/users/register/',
			{ name, email, password, confirmPassword },
			config
		)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
//To get user profile based on :id or 'profile' passed as argument
export const getUserProfile = async () => {
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

		const { data } = await axios.get(`/users/profile/`, config)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

//To update user profile based on user object
export const updateUserProfile = async (user) => {
	try {
		const {
			userLogin: { userInfo },
		} = getState()

		var formData = new FormData()
		for (var key in user) {
			formData.append(key, user[key])
		}

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.put(`/users/profile/update/`, formData, config)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

//To update user profile based on user object
export const deleteUser = async (id) => {
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

		const { data } = await axios.delete(`/users/delete/${id}`, config)
		return data.message
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
