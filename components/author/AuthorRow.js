import { Fragment } from 'react'
import Slider from 'react-slick'
import AuthorCard from './AuthorCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '../../utils/constants/sliderSettings'

function AuthorsRow({ authors }) {
	return (
		<Fragment>
			<div className='lg:hidden overflow-hidden overflow-x-scroll hide-scrollbar'>
				<div className='flex items-center justify-start gap-0 xs:gap-2 w-full h-full'>
					{authors?.map((author) => (
						<AuthorCard
							key={author._id}
							name={author.name}
							image={author.image}
							slug={author.slug}
						/>
					))}
				</div>
			</div>
			<div className='hidden lg:block h-auto group'>
				<Slider {...settings}>
					{authors?.map((author) => (
						<AuthorCard
							key={author._id}
							name={author.name}
							image={author.image}
							slug={author.slug}
						/>
					))}
				</Slider>
			</div>
		</Fragment>
	)
}

export default AuthorsRow
