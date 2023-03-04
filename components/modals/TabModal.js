export default function (props) {
	return (
		<>
			<div className='bg-tabs'></div>
			<div className='flex items-center mx-auto md:mx-6 mb-6 justify-between sm:justify-start space-x-1 sm:space-x-6 md:space-x-10'>
				{props.tabs.map((tab, tabIndex) => (
					<div
						key={tabIndex}
						className={`py-1 ${
							props.selectedTab === tabIndex
								? 'border-b-2 md:border-b-3 border-[#8C6AFF] text-lg md:text-2xl'
								: 'text-gray-600 hover:text-gray-200 text-base md:text-xl cursor-pointer'
						}`}
						onClick={() => props.onTabChange(tabIndex)}>
						{tab}
					</div>
				))}
				<div className='py-1  cursor-pointer text-gray-600 hover:text-gray-200'></div>
			</div>
		</>
	)
}
