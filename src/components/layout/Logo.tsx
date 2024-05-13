'use client'

import Link from 'next/link'
import Image from 'next/image'
import { DarkLogo } from '@/assets/images'

const Logo = () => {

  return (
    <Link href='/' className='mr-9'>
      {/*<Image src={isDarkMode ? WhiteLogo : DarkLogo } alt="Logo" width={70} height={50}/>*/}
      <Image src={DarkLogo} alt='Logo' width={70} height={50} />
    </Link>
  )
}

export default Logo
