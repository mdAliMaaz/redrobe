import React, { useState } from 'react'

const useExploding = () => {
	const [isExploding, setIsExploding] = useState(true)
	return [isExploding, setIsExploding]
}

export default useExploding
