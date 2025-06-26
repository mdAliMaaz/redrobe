'use client'
import React from 'react'
import { motion } from 'motion/react'

interface IButtonProps {
	text: string
	type: 'submit' | 'button'
	width?: string
	rounded?: boolean
	bgColor?: string
	disabled?: boolean
}

const Button = ({ text, type, width, rounded, bgColor, disabled }: IButtonProps) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			disabled={disabled}
			type={type}
			className={`${width === 'full' ? 'w-full' : 'w-20 md:w-32'} ${rounded && 'rounded-full'} ${
				bgColor === 'white'
					? 'bg-primary-light text-black hover:bg-black hover:text-primary-light border-none'
					: 'bg-primary-red text-primary-light hover:text-primary-red hover:bg-primary-light'
			}  h-[40px] text-xs font-semibold p-1 md:p-2 transition-colors border-[1px] border-primary-red z-10`}
		>
			{text}
		</motion.button>
	)
}

export default Button
