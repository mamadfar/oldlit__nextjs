'use client'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import useDarkMode from '@/hooks/useDarkMode'

const DarkMode = () => {
  const { themeSwitch, userTheme } = useDarkMode()

  return (
    <div
      onClick={themeSwitch}
      className='fixed bottom-3 right-3 cursor-pointer rounded-full bg-black p-3 sm:bottom-5 sm:right-5 dark:bg-white'
    >
      {userTheme === 'dark' ? (
        <BsFillSunFill className='dark:text-black' />
      ) : (
        <BsFillMoonFill className='text-white' />
      )}
    </div>
  )
}

export default DarkMode
