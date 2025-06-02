import React from 'react'
import Container from './shared/container'
import Heading from './shared/heading'
import { aboutUs, aboutUs_2 } from '@/data'
import Image from 'next/image'

const AboutSection = () => {
	return (
		<Container size="lg">
			<section className="w-full flex flex-col  md:flex-row md:items-center justify-between gap-2">
				<Heading text="About us." />
				<p className="w-full text-sm">{aboutUs}</p>
			</section>
			{/* Images section start here! */}
			<section className="my-15 flex flex-col lg:flex-row gap-3  justify-center items-start  lg:justify-evenly">
				<div className="w-full flex  lg:items-center justify-center lg:justify-start">
					<Image src={'/images/about-1.png'} alt="about-1" height={300} width={300} />
				</div>
				<div className="w-full flex items-center  justify-center lg:justify-start">
					<Image src={'/images/about-2.png'} alt="about-1" height={300} width={300} />
				</div>
				<div className="w-full flex justify-center items-center flex-col  gap-10">
					<Image src={'/images/about-3.png'} alt="about-1" height={300} width={350} />
					<p className="text-sm">{aboutUs_2}</p>
				</div>
			</section>
		</Container>
	)
}

export default AboutSection
