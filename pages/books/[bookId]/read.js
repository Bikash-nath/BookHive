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
		if (renditionRef.current.location?.start && tocRef.current) {
			const { displayed, href } = renditionRef.current.location.start
			const chapter = tocRef.current.find((item) => item.href === href)
			setPageDetails(
				`Page ${displayed.page} of ${displayed.total} ${
					chapter ? 'in chapter ' + chapter.label : ''
				}`
			)
		}
	}

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
					title={title + ' by ' + author}
					location={location}
					locationChanged={locationChanged}
					url={ebookLink}
					readerStyles={customStyles}
					tocChanged={(toc) => (tocRef.current = toc)}
					epubOptions={{
						flow: 'scrolled',
						manager: 'continuous',
					}}
					getRendition={(rendition) => {
						rendition.themes.register('custom', {
							'*': {
								color: 'black',
								background: '#fbf0d9',
							},
						})
						rendition.themes.select('custom')
						renditionRef.current = rendition
					}}
				/>
				<div className='absolute flex items-center justify-between bottom-0 w-full rounded-t-md z-20 text-[#8C6AFF] bg-[#192132]'>
					<p className='mx-3 my-2 w-full z-50'>{pageDetails}</p>

					<div className='flex h-full w-56 z-10 rounded-md bg-[#0C111B] bg-opacity-90'>
						<div className='absolute bottom-0 right-0  flex items-center justify-center '>
							<button
								className={'mx-3 my-1 ' + (size <= 80 && 'opacity-60')}
								onClick={() => changeSize(Math.max(80, size - 10))}>
								<MinusCircleIcon dimensions='w-7 h-7' />
							</button>
							<span className='text-lg xl:text-xl font-medium'>{size}%</span>
							<button
								className={'mx-3 my-1 ' + (size >= 150 && 'opacity-60')}
								onClick={() => changeSize(Math.min(150, size + 10))}>
								<PlusCircleIcon dimensions='w-7 h-7' />
							</button>
						</div>
					</div>
				</div>
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
