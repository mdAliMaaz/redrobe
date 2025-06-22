import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Quicksand } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/shared/navbar'
import { Footer } from '@/components/shared/fotter'
import { Toaster } from 'react-hot-toast'

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // choose the weights you need
	variable: '--font-playfair-display',
	display: 'swap',
})

const quicksand = Quicksand({
	variable: '--font-quicksnad',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'], // Choose weights you need
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'ReDrobe',
	description:
		'Garment production is an organized activity consisting of sequential processes such as laying, marking, cutting, stitching, checking, finishing, pressing and packaging. This is a process of converting raw materials into finished products. It will be difficult to maintain the industry if production is not, up to the mark if the preproduction phase of preparation of material is not properly carried out.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
			<body className={` antialiased`}>
				<Navbar />
				{children}
				<Toaster
					position="top-right"
					toastOptions={{
						style: {
							background: '#333',
							color: '#fff',
						},
					}}
				/>
				<Footer />
			</body>
		</html>
	)
}
