import AboutSection from '@/components/about-section'
import Hero from '@/components/hero'
import { JoinAsCreator } from '@/components/join-as-creator'

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutSection />
			<JoinAsCreator />
		</main>
	)
}
