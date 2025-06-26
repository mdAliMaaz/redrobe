'use client'

import Image from 'next/image'
import React from 'react'
import Container from './shared/container'
import Heading from './shared/heading'
import { motion } from 'motion/react'

const Hero = () => {
	return (
		<Container size="lg">
			<motion.section className="w-full relative">
				{/* <Image
					src={'/images/vector_1.png'}
					alt="vector"
					className="hidden md:block absolute -bottom-5 left-0"
					width={170}
					height={170}
				/>
				<Image
					src={'/images/vector_1.png'}
					alt="vector"
					className="hidden md:block absolute top-0 right-0"
					width={200}
					height={200}
				/> */}
				<div className="flex items-center justify-center">
					<Heading
						text="JOIN THE WAITLIST"
						position="center"
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 font-normal"
					/>
					<Image src={'/images/hero-image.png'} width={1650} height={1500} alt="hero-image" />
				</div>
			</motion.section>
		</Container>
	)
}

export default Hero
