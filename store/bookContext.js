import { createContext, useState } from 'react'

const BookContext = createContext({
	book: { title: '', slug: '', image: '', author: {} },
	addBook: function (bookData) {},
	removeBook: function () {},
	activeBook: null,
	setActiveBook: function (activeState) {},
	activeListen: false,
	setActiveListen: function (listenState) {},
})

export function BookContextProvider(props) {
	const [currentBook, setCurrentBook] = useState({})
	const [bookState, setBookState] = useState(null)
	const [listenState, setListenState] = useState(false)

	function addBookHandler(bookData) {
		setCurrentBook(bookData)
		setBookState(null)
	}

	function removeBookHandler() {
		setCurrentBook(null)
		setBookState(null)
	}

	function setActiveHandler(activeState) {
		setBookState(activeState)
	}

	function setListenHandler(listenState) {
		setListenState(listenState)
	}

	const context = {
		book: currentBook,
		addBook: addBookHandler,
		removeBook: removeBookHandler,
		activeBook: bookState,
		setActiveBook: setActiveHandler,
		activeListen: listenState,
		setActiveListen: setListenHandler,
	}

	return <BookContext.Provider value={context}>{props.children}</BookContext.Provider>
}

export default BookContext
