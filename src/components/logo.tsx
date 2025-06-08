import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className="max-w-fit">
				<h1 className="font-playfair-display font-semibold text-3xl lg:text-5xl tracking-tighter leading-6 md:leading-none">
					ReDrobe <span className="text-primary-red">.</span>
				</h1>
				<p className="text-sm text-primary-red tracking-wide ld:tracking-widest">wear The story</p>
			</div>
		</Link>
	)
}

export default Logo
