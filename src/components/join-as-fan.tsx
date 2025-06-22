'use client'

import { FormEvent, useState } from 'react'
import axios from 'axios'
import WelcomToRedRobe from './shared/welcome-to-redrobe'
import Image from 'next/image'
import { Input } from './shared/input'
import Button from './shared/button'
import Container from './shared/container'
import ConfettiExplosion from 'react-confetti-explosion'
import useToast from '@/hooks/useToast'

function JoinAsFan() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		joinedAs: 'Fan',
	})

	const { showSuccess, showError } = useToast()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState(false)

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setError(null)
		setSuccess(false)
		// validation
		if (!formData.name || !formData.email) {
			setError('Name and email are required.')
			return
		}
		// api call
		try {
			setLoading(true)
			const URL = process.env.NEXT_PUBLIC_BACKEND_URL
			const response = await axios.post(`${URL}/waitlist`, formData)
			setSuccess(true)
			setFormData({ name: '', email: '', phoneNumber: '', joinedAs: 'Fan' })
			showSuccess(response.data.message)
		} catch (error: any) {
			setError(error?.response?.data?.message || 'Something went wrong.')
			showError(error?.response?.data?.message || 'Something went wrong.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Container size="lg">
			<section className="w-full relative" id="join">
				<h1 className="uppercase text-lg md:text-2xl text-center">Join As Fan</h1>
				<WelcomToRedRobe />
				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly my-6 gap-2">
					<Image
						src={'/images/join-as-fan.png'}
						alt="join-as-fan"
						width={400}
						height={400}
						priority
					/>
					<form method="post" onSubmit={handleOnSubmit} className="flex flex-col space-y-5">
						<h1>Let's get you onboarded</h1>
						<Input
							name="name"
							lable="name"
							value={formData.name}
							required
							handleOnChange={handleOnChange}
						/>
						<Input
							name="email"
							lable="email"
							value={formData.email}
							required
							handleOnChange={handleOnChange}
						/>
						<Input
							lable="WhatsApp (optional)"
							name="phoneNumber"
							value={formData.phoneNumber}
							handleOnChange={handleOnChange}
						/>
						<div className="flex items-start space-x-5">
							<input
								className="w-5 h-5 text-primary-red focus:ring-2 focus:ring-primary-red"
								type="checkbox"
								name="termsAndConditions"
								required
							/>
							<div className="text-sm">
								<p>By creating your account, you agree to our </p>
								<p className="text-primary-red">Terms and Conditions & Privacy Policy</p>
							</div>
						</div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							{success && (
								<ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1400} />
							)}
						</div>
						<Button
							text={loading ? 'Submitting...' : 'JOIN WAITLIST!'}
							type="submit"
							width="full"
							disabled={loading}
						/>
						{error && <p className="text-red-600">{error}</p>}
						{success && <p className="text-green-600">Successfully joined the waitlist!</p>}
					</form>
				</div>
			</section>
		</Container>
	)
}

export default JoinAsFan
