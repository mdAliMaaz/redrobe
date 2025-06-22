import nodemailer from 'nodemailer'

interface IMailOptions {
	to: string
	subject: string
	text: string
	html: string
}

export async function sendMail({ to, subject, text, html }: IMailOptions) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	})

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to,
		subject,
		text,
		html,
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		return { success: true, info }
	} catch (error) {
		console.error('Email send error:', error)
		return { success: false, error }
	}
}
