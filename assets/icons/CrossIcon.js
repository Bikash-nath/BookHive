function CrossIcon({ dimensions, color }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={color || 'none'}
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke={color || 'currentColor'}
			className={'group-hover:opacity-80 ' + dimensions}>
			<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
		</svg>
	)
}

export default CrossIcon
