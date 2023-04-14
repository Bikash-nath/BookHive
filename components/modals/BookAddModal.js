import { useEffect } from 'react'

function BookAddModal(props) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflowY = 'hidden'
		}
	})

	return (
		<div className='fixed top-0 left-0 overflow-y-scroll xl:left-[13.5vw] flex items-center justify-center w-screen xl:w-[85.5vw] h-screen z-20 bg-[#0D1117] bg-opacity-75 p-2 xl:p-4'>
			<div className='flex flex-col gap-4 xl:gap-5 w-full sm:w-1/2 lg:w-5/12 xl:w-2/5 p-4 md:p-6 rounded-md bg-[#192132]'>
				<div className='flex items-start justify-between'>
					<h2 className='text-lg font-medium text-gray-900' id='slide-over-title'>
						{props.title}
					</h2>
				</div>
				<div className='my-4'>{props.children}</div>
				<div className='flex flex-row-reverse border-t border-slate-900 gap-4 pt-4 px-2'>
					<button className={props.book ? 'btn-next' : 'btn-next-inactive'}>
						{props.book ? 'Select' : 'Save'}
					</button>
					<button className='btn-next-inactive' onClick={() => props.setAddBookHandler(false)}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default BookAddModal
