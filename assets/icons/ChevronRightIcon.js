export default function ChevronRightIcon({ dimensions, color = 'none', stroke }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={color}
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke={stroke || 'white'}
			className={dimensions}>
			<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
		</svg>
	)
}
