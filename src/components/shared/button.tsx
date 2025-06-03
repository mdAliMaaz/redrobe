import { types } from 'node:util'
import React from 'react'

interface IButtonProps {
	text: string
	type: 'submit' | 'button'
	width?: string
	rounded?: boolean
}

const Button = ({ text, type, width, rounded }: IButtonProps) => {
	return (
		<button
			type={type}
			className={`${width === 'full' ? 'w-full' : 'w-20 md:w-32'} ${
				rounded && 'rounded-full'
			} bg-primary-red  h-[40px] text-xs font-semibold p-1 md:p-2 text-primary-light  transition-colors hover:text-primary-red hover:bg-primary-light border-[1px] border-primary-red`}
		>
			{text}
		</button>
	)
}

export default Button
