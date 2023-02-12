import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'

export default function Accordion(props) {
	return (
		<div className='py-2 border-b outline-none group' tabIndex={props.tabIndex}>
			<div className='flex items-center justify-between py-4 transition duration-500 cursor-pointer group ease'>
				<div className='text-lg transition duration-500 ease group-hover:text-purple-600'>
					{props.title}
				</div>
				<div className='p-2 transition duration-500 ease group-focus:-rotate-180 group-focus:text-purple-400'>
					<ChevronDownIcon dimensions={'h-6 w-6'} />
				</div>
			</div>
			<div className='md:text-md overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
				<p className='py-2 text-gray-300'>{props.children}</p>
			</div>
		</div>
	)
}
