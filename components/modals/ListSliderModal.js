// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ListSliderModal(props) {
	const { listTitle, listLink } = props
	// const router = useRouter()
	// router.pathname

	return (
		<section className='mb-8 xl:mb-6 xl:py-3 px-2 bg-transparent'>
			<div className='mx-auto md:px-2'>
				<div className='flex justify-between my-3 xl:mx-4 xl:my-2'>
					<h3 className='text-xl xl:text-2xl mx-2 xl:mx-0 font-medium text-center'>
						{listTitle}
					</h3>
					{listLink ? (
						<Link href={listLink} scroll={true}>
							<button className='more-box-btn'>More</button>
						</Link>
					) : (
						<></>
					)}
				</div>
				<div className='mr-1'>{props.children}</div>
			</div>
		</section>
	)
}
