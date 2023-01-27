import React from 'react'

export default function GenresSection() {
	return (
		<section id='creations'>
			<div class='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div class='flex justify-center mb-20 md:justify-between'>
					<h2 class='text-4xl text-center uppercase md:text-left md:text-5xl'>
						Our Creations
					</h2>
				</div>
				<div class='item-container'>
					<div class='group item'>
						<img
							src='images/genres/image-deep-earth.jpg'
							alt=''
							class='hidden w-full duration-200 md:block group-hover:scale-110'
						/>
						<div class='item-gradient'></div>
						<h5>Deep Earth</h5>
					</div>

					<div class='group item'>
						<img
							src='images/genres/image-night-arcade.jpg'
							alt=''
							class='hidden w-full duration-200 md:block group-hover:scale-110'
						/>
						<div class='item-gradient'></div>
						<h5>Night Arcade</h5>
					</div>

					<div class='group item'>
						<img
							src='images/genres/image-soccer-team.jpg'
							alt=''
							class='hidden w-full duration-200 md:block group-hover:scale-110'
						/>
						<div class='item-gradient'></div>
						<h5>Soccer Team VR</h5>
					</div>

					<div class='group item'>
						<img
							src='images/genres/image-grid.jpg'
							alt=''
							class='hidden w-full duration-200 md:block group-hover:scale-110'
						/>
						<div class='item-gradient'></div>
						<h5>The Grid</h5>
					</div>
				</div>
			</div>
		</section>
	)
}
