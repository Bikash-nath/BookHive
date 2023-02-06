import Link from 'next/link'

export default function ListGridModal(props) {
	const { listTitle, listLink } = props

	return (
		<div className='bg-gradient'>
			<section className=''>
				<div className='container mx-4 px-6 py-4 sm:py-6 lg:py-10'>
					<h3 className='text-2xl text-center md:text-left sm:text-3xl md:text-4xl'>
						Popular Books
					</h3>
				</div>
				{props.children}
			</section>
		</div>
	)
}
