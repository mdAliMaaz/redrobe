import React from 'react'
import Button from './shared/button'
import Image from 'next/image'

const Subscribe = () => {
	return (
		<section className="w-full bg-primary-light p-5 md:p-10 overflow-auto">
			<div className="w-full bg-secondary-light md:w-[70%] m-auto flex items-center gap-3 lg:gap-0 flex-col lg:flex-row relative">
				<Image
					src={'/images/vector_1.png'}
					alt="vector_1"
					width={200}
					height={200}
					className=" absolute inset-0 -z-10 lg:z-10"
				/>
				<div className=" flex-1 flex flex-col gap-3 items-center justify-center p-2">
					<h1 className="uppercase text-2xl">Subscribe!</h1>
					<p className="text-gray-700 opacity-75">
						Leave your email and get a offer updates in prior
					</p>
					<div className="flex items-center">
						<input
							className="outline-none bg-white w-full md:w-80 border-[1px] border-gray-300  px-2 py-2 z-100"
							placeholder="Email"
						/>
						<Button text="Subscribe" type={'button'} />
					</div>
				</div>
				<div>
					<Image src={'/images/subscribe.png'} width={500} height={500} alt="subscribe" />
				</div>
			</div>
		</section>
	)
}

export default Subscribe
