import axios from '../lib/axiosConfig'

export const login = async (email, password) => {
	try {
		const { data } = await axios.post('/users/login/', { email, password })
		localStorage.setItem('userInfo', JSON.stringify(data))
		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

export const logout = async () => {
	localStorage.removeItem('userInfo')
}

export const signup = async (name, email, password, confirmPassword) => {
	try {
		const { data } = await axios.post('/users/register/', {
			name,
			email,
			password,
			confirmPassword,
		})
		localStorage.setItem('userInfo', JSON.stringify(data))
		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
//To get user profile based on :id or 'profile' passed as argument
export const getUserProfile = async () => {
	try {
		// const  { userInfo } or cookie = getState()
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.get(`/users/profile/`, config)
		localStorage.setItem('userInfo', JSON.stringify(data))
		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

//To update user profile based on user object
export const updateUserProfile = async (user) => {
	try {
		// const  { userInfo } or cookie = getState()
		var formData = new FormData()
		for (var key in user) {
			formData.append(key, user[key])
		}

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.put(`/users/profile/update/`, formData, config)
		localStorage.setItem('userInfo', JSON.stringify(data))
		return data
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}

//To update user profile based on user object
export const deleteUser = async (id) => {
	try {
		// const  { userInfo } or cookie = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.delete(`/users/delete/${id}`, config)
		return data.message
	} catch (error) {
		return error.response?.data.error_message ? error.response.data.error_message : error.message
	}
}
