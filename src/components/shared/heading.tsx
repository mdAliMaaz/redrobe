import React from 'react'
import { motion } from 'motion/react'

interface IHeadingProps {
	text: string
	className?: string
	position?: 'start' | 'center'
}
const Heading = ({ text, className, position }: IHeadingProps) => {
	let title = text.split(' ')
	return (
		<h1
			className={`${className} ${
				position === 'center' && 'text-center'
			}  w-full text-3xl md:text-5xl lg:text-6xl font-playfair-display`}
		>
			{title.map((el, i) => (
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: 0.6,
						delay: i / 10,
					}}
					viewport={{ once: true }}
					key={i}
				>
					{el}
				</motion.span>
			))}
		</h1>
	)
}

export default Heading
