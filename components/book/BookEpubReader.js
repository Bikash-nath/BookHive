import { useState } from 'react'
import { ReactReader } from 'react-reader'
import CloseIcon from '../../assets/icons/CloseIcon'

function BookEpubReader({ ebookLink, title, closeReadBook }) {
	const [location, setLocation] = useState(null)

	const locationChanged = (epubCifi) => {
		setLocation(epubCifi)
	}

	return (
		<div className='relative h-screen w-screen'>
			<ReactReader
				title={title}
				location={location}
				locationChanged={locationChanged}
				url='/ebooks/Secrets-of-the-Millionaire-Mind.epub'
			/>
			<div
				className='group absolute top-4 left-4 lg:top-6 lg:left-6 p-1 scale-110 lg:scale-125 flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'
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
