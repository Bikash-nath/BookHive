import { createContext, useState } from 'react'

const BookContext = createContext({
	book: { title: '', slug: '', image: '', author: {} },
	addBook: function (bookData) {},
	removeBook: function () {},
	activeBook: null,
	setActiveBook: function (activeState) {},
	isPlaying: false,
	setPlaying: function (isPlaying) {},
	showPlayer: false,
	setShowPlayer: function (playerState) {},
})

export function BookContextProvider(props) {
	const [currentBook, setCurrentBook] = useState({})
	const [bookState, setBookState] = useState(null)
	const [showPlayer, setShowPlayer] = useState(false)
	const [isPlaying, setPlaying] = useState(false)

	function addBookHandler(bookData) {
		setCurrentBook(bookData)
		setBookState(null)
	}

	function removeBookHandler() {
		setCurrentBook(null)
		setBookState(null)
	}

	function activeBookHandler(activeState) {
		setBookState(activeState)
	}

	function showPlayerHandler(showPlayer) {
		setShowPlayer(showPlayer)
	}

	function playHandler(isPlaying) {
		setPlaying(isPlaying)
	}

	const context = {
		book: currentBook,
		addBook: addBookHandler,
		removeBook: removeBookHandler,
		activeBook: bookState,
		setActiveBook: activeBookHandler,
		showPlayer: showPlayer,
		setShowPlayer: showPlayerHandler,
		isPlaying: isPlaying,
		setPlaying: playHandler,
	}

	return <BookContext.Provider value={context}>{props.children}</BookContext.Provider>
}

export default BookContext
