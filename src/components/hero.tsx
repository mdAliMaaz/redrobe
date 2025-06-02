import Image from 'next/image'
import React from 'react'
import Container from './shared/container'
import Heading from './shared/heading'

const Hero = () => {
	return (
		<Container size="lg">
			<section className="w-full relative">
				<div className="flex items-center justify-center">
					<Heading
						text="JOIN THE WAITLIST"
            position='center'
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 font-normal"
					/>
					<Image src={'/images/hero-image.png'} width={1650} height={1500} alt="hero-image" />
				</div>
			</section>
		</Container>
	)
}

export default Hero
