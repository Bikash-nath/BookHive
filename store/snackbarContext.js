import { createContext, useState } from 'react'

const SnackbarContext = createContext({
	message: { title: '', status: '' },
	addMessage: function (messageData) {},
	removeMessage: function () {},
})

export function SnackbarContextProvider(props) {
	const [activeSnackbar, setActiveSnackbar] = useState({})
	// const [messageToggle, setSnackbarToggle] = useState(false)

	function addMessageHandler(messageData) {
		setActiveSnackbar(messageData)
	}

	function removeMessageHandler() {
		setActiveSnackbar(null)
	}

	const context = {
		message: activeSnackbar,
		addMessage: addMessageHandler,
		removeMessage: removeMessageHandler,
	}

	return <SnackbarContext.Provider value={context}>{props.children}</SnackbarContext.Provider>
}

export default SnackbarContext
