'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col min-h-screen justify-center items-center gap-4'>
      <h2 className='text-3xl font-bold'>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-black rounded transition duration-300'
      >
        Try again
      </button>
      <h6 className='border-b border-black mt-5'>Error message</h6>
      <p className='tracking-wider'>{error.message}</p>
    </div>
  )
}
