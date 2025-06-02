import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className="max-w-fit">
				<Image className='w-auto'  src={'/images/redrobe-logo.png'} alt="logo" height={200} width={200} priority />
			</div>
		</Link>
	)
}

export default Logo
