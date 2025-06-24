import { welcomeEmailForCreator, welcomeEmailForFan } from '@/data'
import dbConnect from '@/lib/dbConfig'
import { sendMail } from '@/lib/sendMail'
import User from '@/modals/user'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	try {
		await dbConnect()
		const body = await req.json()
		const { name, email, joinedAs } = body

		if (!name || !email) {
			return new Response(JSON.stringify({ message: 'name and email are required fields.' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		const alreadyExistingUser = await User.findOne({ email })

		if (alreadyExistingUser) {
			return new Response(JSON.stringify({ message: 'User already in the list.' }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		const newUser = await User.create(body)

		if (newUser) {
			if (joinedAs === 'Fan') {
				await sendMail({
					to: newUser.email,
					html: welcomeEmailForFan,
					subject: 'Joined waitlist',
				})
			} else {
				await sendMail({
					to: newUser.email,
					html: welcomeEmailForCreator,
					subject: 'Joined waitlisat',
				})
			}
			return NextResponse.json({ message: 'Successfully joined the waitlist!', newUser: newUser })
		} else {
			return NextResponse.json({ messge: 'Something went wrong.' })
		}
	} catch (e: any) {
		console.log(e)
		return new Response(JSON.stringify({ message: 'Internal server error.' }), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
