import { useState, useEffect, useRef, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ReactReader, ReactReaderStyle } from 'react-reader'
// import BookContext from '../../../store/bookContext'
import CrossIcon from '../../../assets/icons/CrossIcon'
import PlusCircleIcon from '../../../assets/icons/PlusCircleIcon'
import MinusCircleIcon from '../../../assets/icons/MinusCircleIcon'
import readerStyles from '../../../utils/constants/readerStyles'

function BookEpubReader() {
	const router = useRouter()
	const { ebookLink, author } = router.query
	const title = router.asPath.split('.')[1]?.split('/read')[0].split('-').join(' ')
	const [size, setSize] = useState(100)

	// const bookCtx = useContext(BookContext)
	// const [title, setTitle] = useState('')
	// const [author, setAuthor] = useState('')
	// const [ebookLink, setEbookLink] = useState('')
	// useEffect(() => {
	// 	console.log('bookCtx.book', bookCtx.book)
	// 	if (bookCtx.book) {
	// 		setTitle(bookCtx.book.title)
	// 		setAuthor(bookCtx.book.author.name)
	// 		setEbookLink(bookCtx.book.format.ebook.link)
	// 	}
	// }, [bookCtx.book])
	// const bookCloseHandler = () => {
	// 	bookCtx.setActiveBook(true)
	// 	router.back()
	// }

	const [location, setLocation] = useState(null)
	const [pageDetails, setPageDetails] = useState('')
	const renditionRef = useRef(null)
	const tocRef = useRef(null)

	const locationChanged = (epubCifi) => {
		setLocation(epubCifi)
		if (renditionRef.current.location?.start && tocRef.current) {
			const { displayed, href } = renditionRef.current.location.start
			const chapter = tocRef.current.find((item) => item.href === href)
			setPageDetails(
				`Page ${displayed.page} of ${displayed.total} ${chapter ? 'in chapter ' + chapter.label : ''}`
			)
		}
	}

	useEffect(() => {
		if (renditionRef.current) {
			renditionRef.current.themes.fontSize(`${size}%`)
		}
	}, [size])

	const changeSize = (newSize) => {
		setSize(newSize)
	}

	//bg-#fbf0d9
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='relative h-full w-full'>
				<ReactReader
					title={title + ' by ' + author}
					location={location}
					locationChanged={locationChanged}
					url={process.env.EBOOK_URL + ebookLink}
					readerStyles={{ ...ReactReaderStyle, ...readerStyles }}
					tocChanged={(toc) => (tocRef.current = toc)}
					epubOptions={{
						flow: 'scrolled',
						manager: 'continuous',
					}}
					getRendition={(rendition) => {
						rendition.themes.register('custom', {
							'*': {
								color: 'white',
								background: '#080e19', //#fbf0d9
							},
						})
						rendition.themes.select('custom')
						renditionRef.current = rendition
					}}
				/>
				<div className='absolute flex items-center justify-between bottom-0 w-full rounded-t-md z-20 text-[#8C6AFF] bg-[#111826]'>
					<p className='mx-3 my-2 w-full z-50'>{pageDetails}</p>

					<div className='flex h-full w-56 z-10 rounded-md bg-[#0C111B] bg-opacity-90'>
						<div className='absolute bottom-0 right-0  flex items-center justify-center '>
							<button
								className={'mx-3 my-1 ' + (size <= 70 && 'opacity-60')}
								onClick={() => changeSize(Math.max(70, size - 10))}>
								<MinusCircleIcon dimensions='w-7 h-7' />
							</button>
							<span className='text-lg xl:text-xl z-0 font-medium'>{size}%</span>
							<button
								className={'mx-3 my-1 ' + (size >= 150 && 'opacity-60')}
								onClick={() => changeSize(Math.min(150, size + 10))}>
								<PlusCircleIcon dimensions='w-7 h-7' color='#0C111B' />
							</button>
						</div>
					</div>
				</div>
				<div
					className='group absolute top-1 right-1 z-10 xl:top-2 xl:right-5 p-1 m-0.5 xl:m-1 xl:scale-110 flex items-center justify-center w-6 h-6 bg-gray-400 bg-opacity-10 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'
					onClick={() => router.back()}>
					<CrossIcon />
				</div>
			</div>
		</Fragment>
	)
}

export default BookEpubReader
