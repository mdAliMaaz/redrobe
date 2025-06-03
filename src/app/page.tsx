import AboutSection from '@/components/about-section'
import Hero from '@/components/hero'
import Heading from '@/components/shared/heading'
import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutSection />
			<section className="bg-dark w-full flex items-end justify-center pt-5 px-4 relative overflow-hidden">
				<div className="gradient-01  absolute inset-0 w-[30%]"></div>
				<div className="size-[50%] gradient-02 absolute"></div>
				<div className="border-[1px] border-white/40 rounded-t-full pt-2.5 px-2.5  md:pt-4 md:px-4 relative">
					<div className="flex items-end justify-center border-[1px] border-white/40 w-fit rounded-t-full pt-1.5 px-1.5 md:pt-3 md:px-3">
						<h1 className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 text-primary-red text-8xl font-cormorant">
							RedRobe.
						</h1>
						<Image src={'/images/about-4.png'} alt="about-4" width={400} height={400} />
					</div>
				</div>
			</section>
		</main>
	)
}
