import Link from 'next/link'

export default function ListGridModal(props) {
	return (
		<div className='bg-gradient min-h-full'>
			<section className=''>
				<div className='container px-6 py-4 sm:py-6 lg:py-8'>
					<h3 className='text-2xl text-center md:text-left sm:text-3xl md:text-4xl'>
						{props.listTitle}
					</h3>
				</div>
				{props.children}
			</section>
		</div>
	)
}
