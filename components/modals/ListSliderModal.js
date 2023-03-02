// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ListSliderModal(props) {
	const { listTitle, listLink } = props
	// const router = useRouter()
	// router.pathname

	return (
		<section className='mb-2 lg:mb-4 px-1 sm:px-2 py-3 lg:p-4'>
			<div className='container mx-auto md:px-2'>
				<div className='flex justify-between mx-4 lg:mx-6'>
					<h3 className='text-xl lg:text-2xl font-medium text-center'>{listTitle}</h3>
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
