import Hero from '@/components/hero'
import Container from '@/components/shared/container'
import Heading from '@/components/shared/heading'
import { aboutUs } from '@/data'

export default function Home() {
	return (
		<main>
			<Hero />
			<Container size="lg">
				<section className="w-full flex flex-col  md:flex-row md:items-center justify-evenly gap-2">
					<Heading text="About us." />
					<p className="w-full text-sm">{aboutUs}</p>
				</section>
			</Container>
		</main>
	)
}
