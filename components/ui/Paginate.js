import { useRouter } from 'next/router'

function Paginate({ pages, page, keyword = '' }) {
	const router = useRouter()
	const path = router.pathname
	// const sortType = keyword.split("&sortBy=")[1]?.split("&")[0];

	const setHref = (x) => {
		if (keyword) {
			return `${path}?keyword=${keyword}&page=${x + 1}`
		} else {
			return `${path}?page=${x + 1}`
		}
	}

	return (
		pages > 1 && (
			<div>
				{[...Array(pages).keys()].map((x) => (
					<Link href={setHref(x)} key={x}>
						<div className={' ' + x + 1 === page ? 'bg-[#8C6AFF]' : 'bg-gray-900'}>
							{x + 1}
						</div>
					</Link>
				))}
			</div>
		)
	)
}

export default Paginate
