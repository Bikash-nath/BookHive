import { Fragment } from 'react'
import Slider from 'react-slick'
import AuthorCard from './AuthorCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '../../utils/constants/sliderSettings'

function AuthorsRow({ authors }) {
	return (
		<Fragment>
			<div className='md:hidden overflow-hidden overflow-x-scroll p-0 m-0 hide-scrollbar'>
				<div className='flex items-center justify-start gap-0 xs:gap-2 m-1 w-full h-full'>
					{authors?.map((author) => (
						<AuthorCard
							key={author._id}
							name={author.name}
							image={author.imageSm}
							slug={author.slug}
						/>
					))}
				</div>
			</div>
			<div className='hidden md:block h-auto group p-1 sm:px-4 md:px-6'>
				<Slider {...settings}>
					{authors?.map((author) => (
						<AuthorCard
							key={author._id}
							name={author.name}
							image={author.image_sm}
							slug={author.slug}
						/>
					))}
				</Slider>
			</div>
		</Fragment>
	)
}

export default AuthorsRow
