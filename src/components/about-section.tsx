import React from 'react'
import Container from './shared/container'
import Heading from './shared/heading'
import { aboutUs, aboutUs_2 } from '@/data'
import Image from 'next/image'
import Button from './shared/button'
import Link from 'next/link'

const AboutSection = () => {
	return (
		<>
			<Container size="lg">
				<section className="w-full flex flex-col  md:flex-row md:items-center justify-between gap-2">
					<Heading text="About us." />
					<p className="w-full text-sm">{aboutUs}</p>
				</section>
				{/* Images section start here! */}
				<section className="my-15 flex flex-col lg:flex-row gap-3  justify-center items-start  lg:justify-evenly">
					<div className="w-full flex  lg:items-center justify-center lg:justify-start">
						<Image src={'/images/about-1.png'} alt="about-1" height={300} width={300} priority />
					</div>
					<div className="w-full flex items-center  justify-center lg:justify-start">
						<Image src={'/images/about-2.png'} alt="about-1" height={300} width={300} priority />
					</div>
					<div className="w-full flex justify-center items-center flex-col  gap-10">
						<Image src={'/images/about-3.png'} alt="about-1" height={300} width={350} priority />
						<p className="text-sm">{aboutUs_2}</p>
					</div>
				</section>
			</Container>
			<section className="bg-dark w-full flex items-end justify-center pt-5 px-4 relative overflow-hidden">
				<div className="gradient-01  absolute inset-0 w-[30%]"></div>
				<div className="size-[50%] gradient-02 absolute"></div>
				<div className="border-[1px] border-white/40 rounded-t-full pt-2.5 px-2.5  md:pt-4 md:px-4 relative">
					<div className="flex items-end justify-center border-[1px] border-white/40 w-fit rounded-t-full pt-1.5 px-1.5 md:pt-3 md:px-3">
						<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-red text-8xl font-playfair-display">
							ReDrobe.
						</h1>
						<div className="absolute left-1/2 top-[80%] -translate-x-1/2">
							<Link href={'#join'}>
								<Button text="JOIN NOW!" type="button" bgColor="white" width="full" />
							</Link>
						</div>
						<Image src={'/images/about-4.png'} alt="about-4" width={400} height={400} priority />
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutSection
