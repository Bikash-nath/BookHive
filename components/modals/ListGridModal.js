import Link from 'next/link'

export default function ListGridModal(props) {
	return (
		<section className='p-2 lg:p-3'>
			<div className='container p-2 pb-6 lg:p-6'>
				<h3 className='text-xl lg:text-2xl font-medium text-left'>{props.listTitle}</h3>
			</div>
			{props.children}
		</section>
	)
}
