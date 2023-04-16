import { useEffect, useRef } from 'react'

function BookAddModal(props) {
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
			className='fixed top-14 left-0 xl:left-[13.5vw] overflow-y-scroll flex items-center justify-center w-screen xl:w-[85.5vw] min-h-screen z-20 bg-[#0D1117] bg-opacity-75'>
			<div className='flex flex-col gap-6 xl:gap-8 w-full sm:w-1/2 lg:w-5/12 xl:w-2/5 p-4 pb-16 xl:p-6 xl:pb-8 rounded-md bg-[#0C111B]'>
				<div className='flex items-start justify-between'>
					<h2 className='text-lg font-medium text-white' id='slide-over-title'>
						{props.title}
					</h2>
				</div>
				{props.children}
				<div className='flex flex-row-reverse border-t border-slate-600 gap-4 mt-2 pt-4'>
					<button className={props.book ? 'btn-next' : 'btn-next-inactive'} onClick={props.saveBookHandler}>
						{props.book ? 'Select' : 'Save'}
					</button>
					<button className='btn-next-inactive' onClick={closeModalHandler}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default BookAddModal
