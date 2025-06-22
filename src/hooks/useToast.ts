import { toast } from 'react-hot-toast'

const useToast = () => {
	const showToast = (message: string, options = {}) => {
		toast(message, options)
	}

	const showSuccess = (message: string) => {
		toast.success(message)
	}

	const showError = (message: string) => {
		toast.error(message)
	}

	return {
		showToast,
		showSuccess,
		showError,
	}
}

export default useToast
