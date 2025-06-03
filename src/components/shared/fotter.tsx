'use client'
import { flinks, paymentIcons, socialLink } from '@/data'
import React, { useState } from 'react'
import { Flinks } from '../flinks'
import Link from 'next/link'
import Image from 'next/image'

const currentYear = new Date().getFullYear()

export const Footer = () => {
	const [year, setYear] = useState(currentYear)
	return (
		<footer className="bg-primary-red">
			{/* links */}
			<div
				className="w-full md:w-[80%] m-auto bg-primary-red flex flex-col md:flex-row items-start py-10 space-x-30 gap-5 px-2
      "
			>
				{flinks.map((item, i) => (
					<Flinks key={i} header={item.header} links={item.links} />
				))}
			</div>

			{/* socil links ar here */}
			<div className="w-full md:w-[80%] m-auto bg-primary-red flex flex-col md:flex-row  md:space-x-30 py-5 px-2 gap-5">
				<div className="flex items-center gap-2">
					{socialLink.map((item, i) => (
						<Link href={item.link} key={i}>
							<Image src={`/icons/${item.icon}`} width={35} height={35} alt={item.icon} />
						</Link>
					))}
				</div>
				<div className="flex items-center gap-2">
					{paymentIcons.map((item, i) => (
						<Link href={item.link} key={i}>
							<Image src={`/icons/${item.icon}`} width={32} height={32} alt={item.icon} />
						</Link>
					))}
				</div>
				<div></div>
			</div>
			{/* last bar */}
			<div className=" bg-primary-light px-2 py-5">
				<div className="w-full md:w-[80%] m-auto flex flex-col md:flex-row justify-between ">
					<h1 className="text-dark text-sm">Ⓒ {year} &nbsp; ReDrobe.</h1>
					<ul className="flex flex-col md:flex-row space-x-5 text-sm text-primary-red">
						<li>Privacy & Cookies</li>
						<li>Ts&Cs</li>
						<li>Accessibility</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
