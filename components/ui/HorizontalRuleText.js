export default function HorizontalRuleText({ message }) {
	return (
		<div className='flex items-center my-4 xl:my-6 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-200'>
			<p className='mx-4 mb-0 text-center font-medium text-sm text-gray-400'>{message}</p>
		</div>
	)
}
