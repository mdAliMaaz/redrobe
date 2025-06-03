import React from 'react'
import Container from './shared/container'
import WelcomToRedRobe from './shared/welcome-to-redrobe'
import { Input } from './shared/input'
import Image from 'next/image'
import Button from './shared/button'

function JoinAsFan() {
	return (
		<Container size="lg">
			<section className="w-full" id="join">
				<h1 className="uppercase text-lg md:text-2xl text-center">Join As Fan</h1>
				<WelcomToRedRobe />
				<div>
					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly my-6 gap-2">
						<Image
							src={'/images/join-as-fan.png'}
							alt="join-as-fan"
							width={400}
							height={400}
							priority
						/>
						<div className="flex flex-col space-y-5">
							<h1>Let's get you onborded</h1>
							<Input name="name" lable="name" />
							<Input name="email" lable="email" />
							<Input lable="WhatsApp (optional)" name="phoneNumber" />
							<div className="flex items-start space-x-5">
								<input
									className="w-5 h-5 text-primary-red focus:ring-2 focus:ring-primary-red"
									type="checkbox"
									name="termsAndConditions"
								/>
								<div className="text-sm">
									<p>By creating your account, you agree to our </p>
									<p className="text-primary-red">Terms and Conditions & Privacy Policy</p>
								</div>
							</div>
							<Button text="JOIN WAITLIST!" type="button" width="full" />
						</div>
					</div>
				</div>
			</section>
		</Container>
	)
}

export default JoinAsFan
