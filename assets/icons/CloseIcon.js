export default function CloseIcon({ dimensions, color }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={'text-black group-hover:text-gray-600 ' + dimensions}
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke={color || 'black'}
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<title>Close</title>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<line x1='18' y1='6' x2='6' y2='18' />
			<line x1='6' y1='6' x2='18' y2='18' />
		</svg>
	)
}
