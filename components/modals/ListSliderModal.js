// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ListSliderModal(props) {
	const { listTitle, listLink } = props
	// const router = useRouter()
	// router.pathname

	return (
		<section className='mb-8 lg:mb-6 lg:py-3 px-2 bg-opacity-20'>
			<div className='mx-auto md:px-2'>
				<div className='flex justify-between my-3 lg:mx-4 lg:my-2'>
					<h3 className='text-xl lg:text-2xl mx-2 lg:mx-0 font-medium text-center'>
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
				{props.children}
			</div>
		</section>
	)
}
