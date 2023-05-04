import { createContext, useState } from 'react'

const BookContext = createContext({
	book: { title: '', slug: '', image: '', author: {} },
	addBook: function (bookData) {},
	removeBook: function () {},
	activeBook: false,
	setActiveBook: function (activeState) {},
})

export function BookContextProvider(props) {
	const [currentBook, setCurrentBook] = useState({})
	const [bookState, setBookState] = useState(false)

	function addBookHandler(bookData) {
		console.log('addBookHandler', bookData)
		setCurrentBook(bookData)
		setBookState(false)
	}

	function removeBookHandler() {
		console.log('removeBookHandler', null)
		setCurrentBook(null)
		setBookState(false)
	}

	function setActiveHandler(activeState) {
		console.log('setActiveHandler', activeState)
		setBookState(activeState)
	}

	const context = {
		book: currentBook,
		addBook: addBookHandler,
		removeBook: removeBookHandler,
		activeBook: bookState,
		setActiveBook: setActiveHandler,
	}

	return <BookContext.Provider value={context}>{props.children}</BookContext.Provider>
}

export default BookContext
