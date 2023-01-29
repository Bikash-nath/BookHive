import ReactDOM from 'react-dom'

function Notification(props) {
	const { title, message, status } = props

	let statusClasses = ''

	if (status === 'success') {
	}

	if (status === 'error') {
	}

	return ReactDOM.createPortal(
		<div className=''>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>,
		document.getElementById('notifications')
	)
}

export default Notification
