const Error = (error) => (
	<div className='w-full flex justify-center items-center'>
		<div className='w-screen h-20 bg-red-600'>
			<h1 className='font-bold text-2xl text-white text-center p-4'>{error}</h1>
		</div>
	</div>
)

export default Error
