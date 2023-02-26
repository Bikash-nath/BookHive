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
	const [currentUser, setCurrentUser] = useState(userInfoFromStorage)

	function addUserHandler(userData) {
		setCurrentUser(userData)
		localStorage.setItem('userInfo', JSON.stringify(userData))
	}

	function removeUserHandler() {
		setCurrentUser(null)
		localStorage.removeItem('userInfo', null)
	}

	const context = {
		user: currentUser,
		addUser: addUserHandler,
		removeUser: removeUserHandler,
	}

	return <UserContext.Provider value={context}>{props.children}</UserContext.Provider>
}

export default UserContext
