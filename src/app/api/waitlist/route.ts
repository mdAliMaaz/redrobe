import dbConnect from '@/lib/dbConfig'
import { sendMail } from '@/lib/sendMail'
import User from '@/modals/user'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
	await dbConnect()
	return NextResponse.json({ message: 'Hello from App Router API!' })
}

export async function POST(req: NextRequest) {
	try {
		await dbConnect()
		const body = await req.json()
		const { name, email } = body

		if (!name || !email) {
			return new Response(JSON.stringify({ message: 'name and email are required fields.' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		const alreadyExistingUser = await User.findOne({ name })

		if (alreadyExistingUser) {
			return new Response(JSON.stringify({ message: 'User already in the list.' }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		const newUser = await User.create(body)

		if (newUser) {
			// await sendMail({
			// 	to: newUser.email,
			// 	html: 'HTML',
			// 	subject: 'Joined waitlisat',
			// 	text: 'Thank you..',
			// })
			return NextResponse.json(newUser)
		} else {
			return NextResponse.json({ messge: 'Something went wrong.' })
		}
	} catch (e: any) {
		return new Response(JSON.stringify({ message: 'Internal server error.' }), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
