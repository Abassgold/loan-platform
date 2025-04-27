'use client'

import { useEffect } from 'react'
interface ErrorBoundary {
    error: Error
    reset: () => void
}
export default function Error({error,reset,}: ErrorBoundary) {
    useEffect(() => {
    }, [error])

    return (
<div className='text-center bg-gray-100 flex items-center justify-center h-full flex-col space-y-4'>
  <h2 className='md:text-2xl font-semibold text-gray-800'>
    Something went wrong!
  </h2>
  <button
    onClick={() => reset()}
    className='bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold md:text-lg transition duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
  >
    Try Again
  </button>
</div>

    )
}