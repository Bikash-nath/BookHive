import Link from 'next/link'

export default function ListGridModal(props) {
	return (
		<section className='p-1 md:p-2 lg:p-3'>
			<div className='flex justify-between p-1 pt-14 pb-8 lg:p-6'>
				<h3 className='text-xl lg:text-2xl font-medium text-center md:text-left w-full'>
					{props.listTitle}
				</h3>
				<div>{props.rightIcon}</div>
			</div>
			{props.children}
		</section>
	)
}
