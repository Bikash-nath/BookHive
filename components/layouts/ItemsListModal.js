import React from 'react'

export default function ItemsListModal({ listTitle, listLink }) {
	return (
		<section className='mb-2 md:mb-4 p-2 md:p-4'>
			<div className='container mx-auto my-2 md:px-2 xl:px-4'>
				<div className='flex justify-center my-2 md:justify-between'>
					<h3 className='text-2xl text-center md:text-left lg:text-3xl'>
						{listTitle}
					</h3>
					<Link href={listLink}>
						<button className='hidden btn md:block'>See All</button>
					</Link>
				</div>
				{props.children}
			</div>
		</section>
	)
}
