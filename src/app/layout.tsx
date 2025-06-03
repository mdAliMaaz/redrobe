import type { Metadata } from 'next'
import { Cormorant, Montserrat } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/shared/navbar'
import { Footer } from '@/components/shared/fotter'

const cormorant = Cormorant({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // choose the weights you need
	variable: '--font-cormorant',
	display: 'swap',
})

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'], // adjust as needed
	variable: '--font-montserrat',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Redrobe',
	description:
		'Garment production is an organized activity consisting of sequential processes such as laying, marking, cutting, stitching, checking, finishing, pressing and packaging. This is a process of converting raw materials into finished products. It will be difficult to maintain the industry if production is not, up to the mark if the preproduction phase of preparation of material is not properly carried out.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
			<body className={` antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
