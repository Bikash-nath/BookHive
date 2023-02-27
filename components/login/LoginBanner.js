import LoginButton from '../ui/LoginButton'

export default function LoginBanner({ title, message, icon }) {
	const pageIcon = {
		...icon,
		props: {
			dimensions: 'h-24 w-24',
		},
	}
	return (
		<div className='flex flex-col items-center justify-center h-[94vh]'>
			<div className='flex py-4 text-white'>{pageIcon}</div>
			<div className='flex py-2 md:py-4 text-2xl md:text-3xl'>
				<h2>{title}</h2>
			</div>
			<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
				<h3>{message}</h3>
			</div>
			<div className='flex transform scale-125 py-4'>
				<LoginButton />
			</div>
		</div>
	)
}
