import Link from 'next/link'

export default function ListSliderModal(props) {
	const { listTitle, listLink } = props

	return (
		<section className='mb-2 md:mb-4 px-2 py-3 md:p-4'>
			<div className='container mx-auto md:px-2 xl:px-4'>
				<div className='flex justify-center my-2 mx-3 lg:mx-4 md:justify-between'>
					<h3 className='text-2xl text-center md:text-left lg:text-3xl'>
						{listTitle}
					</h3>
					<Link href={listLink}>
						<button className='hidden btn md:block mx-4'>See All</button>
					</Link>
				</div>
				{props.children}
			</div>
		</section>
	)
}
