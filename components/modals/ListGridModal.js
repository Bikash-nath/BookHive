// import Link from 'next/link'

export default function ListGridModal(props) {
	return (
		<section className='p-1 md:p-2 xl:p-3'>
			<div className='flex justify-between px-1 py-10 md:pb-8 xs:pt-0 xl:p-6 z-40'>
				<h3 className='text-xl xl:text-2xl font-medium text-center xl:text-left w-full'>
					{props.listTitle}
				</h3>
			</div>
			<div className='hidden sm:inline'>
				<div className='list-grid animate-slideup'>{props.children}</div>
			</div>
			<div className='sm:hidden list-grid animate-slideup'>{props.children}</div>
		</section>
	)
}
