import { useRef } from 'react'
import CloseIcon from '../../assets/icons/CloseIcon'

function BookReader({ ebookLink, closeReadBook }) {
	const objectRef = useRef()
	const embedRef = useRef()

	return (
		<div className='relative'>
			<object
				data={ebookLink}
				type='application/pdf'
				frameBorder='0'
				ref={objectRef}
				className='w-full h-screen'>
				<embed src={ebookLink} className='w-full h-screen' ref={embedRef} />
			</object>
			<div
				className='group absolute top-4 left-4 xl:top-6 xl:left-6 p-1 scale-110 xl:scale-125 flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'
				onClick={() => closeReadBook(false)}>
				<CloseIcon />
			</div>
		</div>
	)
}

export default BookReader

{
	/* <iframe
	src='/ebooks/Think-and-Grow-Rich-by-Napoleon-Hill.pdf'
	className='w-full h-screen'
	frameBorder='0'
/> */
}
