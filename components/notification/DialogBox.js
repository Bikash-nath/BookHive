import { useEffect } from 'react'

function DialogBox({ title, description, message, setDialogHandler }) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflowY = 'hidden'
		}
	})

	return (
		<div className='fixed top-0 left-0 xl:left-[13.5vw] flex items-center justify-center w-screen xl:w-[85.5vw] h-screen z-20 bg-white bg-opacity-75 p-2 xl:p-4'>
			<div className='flex flex-col gap-4 xl:gap-5 w-full md:w-1/2 xl:w-2/5 p-4 md:p-6 rounded-md bg-[#192132]'>
				<h3 className='text-lg xl:text-xl font-bold text-center'>{title}</h3>
				<p className='font-medium text-gray-200 leading-relaxed'>{description}</p>
				<div className='flex items-center justify-center w-full'>
					<button
						onClick={() => {
							document.body.style.overflowY = 'auto'
							setDialogHandler(false)
						}}
						className='btn-confirm'>
						<span className='font-semibold'>{message}</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default DialogBox
