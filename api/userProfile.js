import axios from '../lib/axiosConfig'

export const login = async (email, password) => {
	try {
		const res = await axios.post('/users/profile/login/', { email, password })
		// console.log('Login-Res', res)
		return res.data
	} catch (error) {
		// error.response?.data
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

export const logout = async () => {
	localStorage.removeItem('userInfo')
}

export const signup = async (name, email, password, passwordConfirm) => {
	try {
		const { data } = await axios.post('/users/profile/signup/', {
			name,
			email,
			password,
			passwordConfirm,
		})
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}
//To get user profile based on :id or 'profile' passed as argument
export const getUserProfile = async () => {
	try {
		const { data } = await axios.get(`/users/profile/getMe`)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
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
		const { data } = await axios.put(`/users/profile/updateMe/`, formData)
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

//To update user profile based on user object
export const changeUserPassword = async (password, newPassword, newPasswordConfirm) => {
	try {
		const { data } = await axios.put(`/users/profile/updatePassword/`, {
			password,
			newPassword,
			newPasswordConfirm,
		})
		return data
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}

//To update user profile based on user object
export const deleteUser = async () => {
	try {
		// const  { userInfo } or cookie = getState()
		const config = {
			headers: {
				Authorization: `Bearer ${cookie.token}`,
			},
		}
		const { data } = await axios.delete(`/users/deleteMe`, config)
		return data.message
	} catch (error) {
		return error.response?.data.message ? error.response.data.message : error.message
	}
}
