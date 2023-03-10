import { useRouter } from 'next/router'
// import Link from 'next/link'

export default function ListGridModal(props) {
	const router = useRouter()
	console.log('router.pathname.', router.pathname)
	return (
		<section className='p-1 md:p-2 xl:p-3'>
			{props.listTitle && (
				<div
					className={
						'flex justify-between px-1 xl:p-6 ' +
						(!router.pathname.includes('/authors/') ? 'py-12' : 'py-1 xl:py-2')
					}
					ref={props.coverRef}>
					<h3 className='text-xl xl:text-3xl font-semibold text-center xl:text-left w-full'>
						{props.listTitle}
					</h3>
				</div>
			)}
			<div className='hidden sm:inline'>
				<div className='list-grid animate-slideup'>{props.children}</div>
			</div>
			<div className='sm:hidden list-grid animate-slideup'>{props.children}</div>
		</section>
	)
}
