import LoginButton from '../../components/ui/LoginButton'

export default function LoginBanner({ title, message, icon }) {
	const pageIcon = {
		...icon,
		props: {
			dimensions: 'h-20 w-20',
			color: 'white',
		},
	}
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='py-4'>{pageIcon}</div>
			<div className='flex-auto py-4 text-xl md:text-4xl'>
				<h2>{title}</h2>
			</div>
			<div className='flex-auto py-2 md:py-4 text-lg md:text-2xl'>
				<h2>{message}</h2>
			</div>
			<div className='scale-120'>
				<LoginButton />
			</div>
		</div>
	)
}
