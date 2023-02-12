import axios from 'axios'

export const login = (username, password) => async () => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}
		username = username.split('@')[0]
		const { data } = await axios.post('/api/users/login/', { username, password }, config)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const logout = () => () => {
	localStorage.removeItem('userInfo')
}

export const signup = (name, email, password, confirmPassword) => async () => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}

		const { data } = await axios.post(
			'/api/users/register/',
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
export const getUserProfile = () => async () => {
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

		const { data } = await axios.get(`/api/users/profile/`, config)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

//To update user profile based on user object
export const updateUserProfile = (user) => async () => {
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

		const { data } = await axios.put(`/api/users/profile/update/`, formData, config)
		return data

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

//To update user profile based on user object
export const deleteUser = (id) => async () => {
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

		const { data } = await axios.delete(`/api/users/delete/${id}`, config)
		return data.message
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
