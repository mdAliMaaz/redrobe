import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
	name: string
	email: string
	phoneNumber?: string
	joinedAs: 'Fan' | 'Creator'
}

const UserSchema = new Schema<IUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phoneNumber: { type: String },
		joinedAs: { type: String, enum: ['Fan', 'Creator'] },
	},
	{ timestamps: true }
)

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

export default User
