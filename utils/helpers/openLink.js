const openLink = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener', 'noreferrer')
	if (newWindow) newWindow.opener = null
}

export default openLink
