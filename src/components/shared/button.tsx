'use client'
import React from 'react'

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
		<button
			disabled={disabled}
			type={type}
			className={`${width === 'full' ? 'w-full' : 'w-20 md:w-32'} ${rounded && 'rounded-full'} ${
				bgColor === 'white'
					? 'bg-primary-light text-black hover:bg-black hover:text-primary-light border-none'
					: 'bg-primary-red text-primary-light hover:text-primary-red hover:bg-primary-light'
			}  h-[40px] text-xs font-semibold p-1 md:p-2 transition-colors border-[1px] border-primary-red`}
		>
			{text}
		</button>
	)
}

export default Button
