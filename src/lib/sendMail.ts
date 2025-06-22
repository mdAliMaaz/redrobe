import nodemailer from 'nodemailer'

interface IMailOptions {
	to: string
	subject: string
	html: string
}

export async function sendMail({ to, subject, html }: IMailOptions) {
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
		html,
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		console.log('Emial sent successfully')
		return { success: true, info }
	} catch (error) {
		console.error('Email send error:', error)
		console.log(`Emial not sent for user ${to}`)
		return { success: false, error }
	}
}
