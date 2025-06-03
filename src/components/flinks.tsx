import React from 'react'

interface IFLinks {
	header: string
	links: string[]
}

export const Flinks = ({ header, links }: IFLinks) => {
	return (
		<div className="text-white space-y-3">
			<h1 className="font-bold uppercase">{header}</h1>
			<ul className="flex flex-col space-y-3  text-sm">
				{links.map((item, i) => {
					return (
						<li className="capitalize font-semibold" key={i}>
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
