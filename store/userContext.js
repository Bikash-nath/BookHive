import { createContext, useState } from 'react'

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

const UserContext = createContext({
	userInfo: { userInfo: userInfoFromStorage },
	addUserHandler: function (userData) {},
	removeUserHandler: function () {},
})

function UserContextProvider(props) {
	const [user, setUser] = useState(userInfoFromStorage)

	function addUserHandler(userData) {
		setUser(userData)
		localStorage.setItem('userInfo', userData)
	}

	function removeUserHandler() {
		setUser(null)
		localStorage.removeItem('userInfo', null)
	}

	const context = {
		userInfo: user,
		addUser: addUserHandler,
		removeUser: removeUserHandler,
	}

	return <UserContext.Provider value={context}>{props.children}</UserContext.Provider>
}

export default UserContextProvider
