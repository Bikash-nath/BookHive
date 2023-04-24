import { useEffect, useRef } from 'react'

function BookUploadModal(props) {
	const modalRef = useRef()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflowY = 'hidden'
			modalRef.current.style.overflowY = 'auto'
		}
	})

	const closeModalHandler = () => {
		props.cancelBookHandler(false)
		document.body.style.overflowY = 'auto'
	}

	return (
		<div
			ref={modalRef}
			className='fixed top-0 xl:top-14 left-0 xl:left-[13.5vw] flex items-center justify-center w-screen xl:w-[85.5vw] min-h-screen z-20 bg-[#0D1117] bg-opacity-80'>
			<div className='absolute top-0 flex items-center justify-center min-h-screen w-full'>
				<div className='flex flex-col justify-center hide-scrollbar gap-4 xl:gap-6 w-full sm:w-1/2 lg:w-5/12 xl:w-2/5 p-4 mb-14 xl:p-6 xl:mb-14 rounded-md bg-[#192139]'>
					<div className='flex items-center justify-center py-2'>
						<h2 className='text-lg font-semibold text-white'>{props.title}</h2>
					</div>
					{props.children}
					<div className='flex flex-row-reverse border-t border-slate-700 gap-4 mt-2 pt-4 xl:pt-6'>
						<button
							className={props.book ? 'btn-next' : 'btn-next-inactive'}
							onClick={props.saveBookHandler}>
							{props.book ? 'Select' : 'Save'}
						</button>
						<button className='btn-next-inactive' onClick={closeModalHandler}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookUploadModal
