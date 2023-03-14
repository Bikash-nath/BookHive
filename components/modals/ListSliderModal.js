// import { useState, useEffect } from 'react'
import Link from 'next/link'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '../../utils/constants/sliderSettings'

export default function ListSliderModal(props) {
	const { listTitle, listLink, books } = props
	const windowWidth = useWindowDimensions()

	return (
		<section className='mb-8 xl:mb-6 xl:py-3 px-2 bg-transparent'>
			<div className='mx-auto md:px-2'>
				<div className='flex xl:justify-center'>
					<div className='flex justify-between my-3 w-full xl:w-[86.5%] xl:my-2'>
						<h3 className='text-lg xl:text-2xl mx-1 xl:mx-0 font-semibold text-center'>
							{listTitle}
						</h3>
						{listLink ? (
							<Link href={listLink} scroll={true}>
								<button className='more-box-btn mx-2 xl:mx-0'>More</button>
							</Link>
						) : (
							<></>
						)}
					</div>
				</div>
				{windowWidth < 1280 ? (
					<div className='overflow-hidden overflow-x-scroll hide-scrollbar'>
						<div className='flex items-start justify-start gap-2 sm:gap-3 w-full h-full'>
							{props.children}
						</div>
					</div>
				) : (
					<div className='h-auto group lg:px-8 xl:px-12'>
						<Slider {...settings}>{props.children}</Slider>
					</div>
				)}
			</div>
		</section>
	)
}
