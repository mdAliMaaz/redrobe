import React from 'react'

interface IButtonProps {
	text: string
	type: 'submit' | 'button'
}

const Button = ({ text, type }: IButtonProps) => {
	return (
		<button className="bg-primary-red w-20  md:w-32 h-[40px] text-xs font-semibold p-1 md:p-2 text-primary-light rounded-full transition-colors hover:text-primary-red hover:bg-primary-light border-[1px] border-primary-red">
			{text}
		</button>
	)
}

export default Button
