import { useState, useRef } from 'react'
import { ReactReader, ReactReaderStyle } from 'react-reader'
import CloseIcon from '../../assets/icons/CloseIcon'

function BookEpubReader({ ebookLink, title, closeReadBook }) {
	const [location, setLocation] = useState(null)
	const [page, setPage] = useState('')
	const renditionRef = useRef(null)
	const tocRef = useRef(null)

	const locationChanged = (epubCifi) => {
		setLocation(epubCifi)
		if (renditionRef.current && tocRef.current) {
			const { displayed, href } = renditionRef.current.location.start
			const chapter = tocRef.current.find((item) => item.href === href)
			setPage(
				`Page ${displayed.page} of ${displayed.total} in chapter ${
					chapter ? chapter.label : 'n/a'
				}`
			)
		}
	}

	const customStyles = {
		...ReactReaderStyle,
		arrow: {
			...ReactReaderStyle.arrow,
			color: '#8C6AFF',
		},
	}

	return (
		<div className='relative h-screen w-full'>
			<ReactReader
				title={title}
				location={location}
				locationChanged={locationChanged}
				url='/ebooks/Secrets-of-the-Millionaire-Mind.epub'
				readerStyles={customStyles}
				tocChanged={(toc) => (tocRef.current = toc)}
				getRendition={(rendition) => (renditionRef.current = rendition)}
				epubOptions={{
					flow: 'scrolled',
					manager: 'continuous',
				}}
			/>
			<div className='absoulte text-center text-[#8C6AFF]'>{page}</div>
			<div
				className='group absolute top-4 right-4 xl:top-6 xl:right-6 p-1 scale-110 xl:scale-125 flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'
				onClick={() => closeReadBook(false)}>
				<CloseIcon />
			</div>
		</div>
	)
}

export default BookEpubReader

{
	/* <iframe
	src='/ebooks/Think-and-Grow-Rich-by-Napoleon-Hill.pdf'
	className='w-full h-screen'
	frameBorder='0'
/> */
}
