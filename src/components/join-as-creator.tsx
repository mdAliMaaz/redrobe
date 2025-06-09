'use client'
import React, { FormEvent, useState } from 'react'
import Container from './shared/container'
import WelcomToRedRobe from './shared/welcome-to-redrobe'
import Image from 'next/image'
import { Input } from './shared/input'
import Button from './shared/button'
import axios from 'axios'

export const JoinAsCreator = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		joinedAs: 'Creator',
	})
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

		if (!formData.name || !formData.email) {
			setError('Name and email are required.')
			return
		}

		try {
			setLoading(true)
			const URL = process.env.NEXT_PUBLIC_BACKEND_URL
			const response = await axios.post(`${URL}/waitlist`, formData)
			setSuccess(true)
			setFormData({ name: '', email: '', phoneNumber: '', joinedAs: 'Creator' })
		} catch (error: any) {
			setError(error?.response?.data?.message || 'Something went wrong.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Container size="lg">
			<section className="w-full" id="join">
				<h1 className="uppercase text-lg md:text-2xl text-center">Join As Creator</h1>
				<WelcomToRedRobe />
				<div>
					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly my-6 gap-2">
						<Image
							src={'/images/join-as-creator.png'}
							alt="join-as-creator"
							width={400}
							height={400}
							priority
						/>
						<form onSubmit={handleOnSubmit} className="flex flex-col space-y-5">
							<h1>Let's get you onborded</h1>
							<Input
								name="name"
								lable="name"
								value={formData.name}
								handleOnChange={handleOnChange}
								required
							/>
							<Input
								name="email"
								lable="email"
								value={formData.email}
								handleOnChange={handleOnChange}
								required
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
				</div>
			</section>
		</Container>
	)
}
