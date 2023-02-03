import LoginButton from '../components/ui/LoginButton'

export default function LoginBanner({ title, message, icon }) {
	const pageIcon = {
		...icon,
		props: {
			dimensions: 'h-24 w-24',
			color: 'white',
		},
	}
	return (
		<div className='h-screen'>
			<div className='flex flex-col items-center justify-center h-[85%] p-2'>
				<div className='py-4'>{pageIcon}</div>
				<div className='flex-none py-2 md:py-4 text-xl md:text-3xl'>
					<h2>{title}</h2>
				</div>
				<div className='flex-none text-center py-2 md:py-4 text-md md:text-xl'>
					<h4>{message}</h4>
				</div>
				<div className='flex-none transform scale-125 py-4'>
					<LoginButton />
				</div>
			</div>
		</div>
	)
}
