import Link from 'next/link'

export default function ListSliderModal(props) {
	const { listTitle, listLink } = props

	return (
		<section className='mb-2 lg:mb-4 px-2 py-3 lg:p-4'>
			<div className='container mx-auto md:px-2'>
				<div className='flex justify-between my-2 mx-4 lg:mx-6'>
					<h3 className='text-2xl lg:text-3xl text-center'>{listTitle}</h3>
					{listLink ? (
						<Link href={listLink} scroll={true}>
							<button className='hidden btn lg:block mx-2 md:mx-8'>See All</button>
						</Link>
					) : (
						<></>
					)}
				</div>
				{props.children}
			</div>
		</section>
	)
}
