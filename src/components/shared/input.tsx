'use client'

import React from 'react'

interface InputProps {
	name: string
	lable: string
	value: string
	required?: boolean
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({ name, lable, value, handleOnChange, required }: InputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="text-primary-red font-semibold text-sm capitalize">{lable}</label>
			<input
				name={name}
				type="text"
				value={value}
				onChange={handleOnChange}
				required={required}
				className="outline-none w-full md:w-100 border-[1px] border-gray-300  px-2 py-1"
			/>
		</div>
	)
}
