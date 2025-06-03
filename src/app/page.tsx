import AboutSection from '@/components/about-section'
import Hero from '@/components/hero'
import { JoinAsCreator } from '@/components/join-as-creator'
import JoinAsFan from '@/components/join-as-fan'
import Subscribe from '@/components/subscribe'

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutSection />
			<JoinAsCreator />
			<JoinAsFan />
			<Subscribe/>
		</main>
	)
}
