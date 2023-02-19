import { createContext, useState } from 'react'

const userInfoFromStorage =
	typeof window !== 'undefined'
		? localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: null
		: null

const UserContext = createContext({
	user: { userInfo: userInfoFromStorage },
	addUser: function (userData) {},
	removeUser: function () {},
})

export function UserContextProvider(props) {
	const [activeUser, setactiveUser] = useState(userInfoFromStorage)

	function addUserHandler(userData) {
		setactiveUser(userData)
		localStorage.setItem('userInfo', JSON.stringify(userData))
	}

	function removeUserHandler() {
		setactiveUser(null)
		localStorage.removeItem('userInfo', null)
	}

	const context = {
		user: activeUser,
		addUser: addUserHandler,
		removeUser: removeUserHandler,
	}

	return <UserContext.Provider value={context}>{props.children}</UserContext.Provider>
}

export default UserContext
