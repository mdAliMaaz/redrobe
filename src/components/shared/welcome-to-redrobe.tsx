import React from 'react'
import { ChevronDown } from 'lucide-react'

const WelcomToRedRobe = () => {
	
	return (
		<h1 className="text-lg flex items-center md:text-3xl bg-secondary-light w-fit m-auto p-1 space-x-2">
			<span>Welcome to</span>
			<span className="text-primary-red flex items-center">
				ReDrobe <ChevronDown />
			</span>
		</h1>
	)
}

export default WelcomToRedRobe
