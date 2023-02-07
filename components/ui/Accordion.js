import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'

export default function Accordion(props) {
	return (
		<div className='py-1 border-b outline-none group' tabindex={props.tabindex}>
			<div className='flex items-center justify-between py-3 transition duration-500 cursor-pointer group ease'>
				<div className='transition duration-500 ease text-lg group-hover:text-indigo-500'>
					{props.title}
				</div>
				<div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-purple-400'>
					<ArrowDownIcon />
				</div>
			</div>
			<div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
				<p className='py-2 text-justify text-gray-300'>{props.content}</p>
			</div>
		</div>
	)
}
