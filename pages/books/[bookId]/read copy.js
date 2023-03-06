import { useState, useEffect, useRef, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ReactReader, ReactReaderStyle } from 'react-reader'
import CloseIcon from '../../../assets/icons/CloseIcon'
import PlusCircleIcon from '../../../assets/icons/PlusCircleIcon'
import MinusCircleIcon from '../../../assets/icons/MinusCircleIcon'
function BookEpubReader() {
	const router = useRouter()
	const { title, ebookLink, author } = router.query
	const [size, setSize] = useState(100)

	const [location, setLocation] = useState(null)
	const [pageDetails, setPageDetails] = useState('')
	const renditionRef = useRef(null)
	const tocRef = useRef(null)

	const locationChanged = (epubCifi) => {
		setLocation(epubCifi)
		if (renditionRef.current && tocRef.current) {
			const { displayed, href } = renditionRef.current.location.start
			const chapter = tocRef.current.find((item) => item.href === href)
			setPageDetails(
				`Page ${displayed.page} of ${displayed.total} ${
					chapter ? 'in chapter ' + chapter.label : ''
				}`
			)
		}
	}

	console.log('ebookLink', ebookLink)

	useEffect(() => {
		if (renditionRef.current) {
			renditionRef.current.themes.fontSize(`${size}%`)
		}
	}, [size])

	const customStyles = {
		...ReactReaderStyle,
		arrow: {
			display: 'none',
		},
		background: '#030b17',
	}

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
					title={
						<p className='font-bold text-lg xl:text-xl text-[#030b17]'>
							{title + ' by ' + author}
						</p>
					}
					location={location}
					locationChanged={locationChanged}
					url={ebookLink}
				/>
				<div
					className='group absolute top-4 right-4 z-10 xl:top-6 xl:right-6 p-1 xl:scale-110 flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'
					onClick={() => router.back()}>
					<CloseIcon />
				</div>
			</div>
		</Fragment>
	)
}

export default BookEpubReader
