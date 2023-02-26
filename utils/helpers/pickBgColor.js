import colors from '../constants/bgColors'

export function pickBgColor(slug) {
	const id = slug.split('.')[0]
	const index = Math.floor(id.slice(-2) / 5)
	const bgColor = colors[index]
	return bgColor
}
