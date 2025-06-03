import React from 'react'

interface InputProps {
	name: string
	lable: string
}
export const Input = ({ name, lable }: InputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-primary-red font-semibold text-sm capitalize">
				{lable}
			</label>
			<input
				name={name}
				type="text"
				className="outline-none w-full md:w-100 border-[1px] border-gray-300  px-2 py-1"
			/>
		</div>
	)
}
