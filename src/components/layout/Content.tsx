import { FC, ReactNode } from 'react'
import { Container } from '@/components'

interface IContentProps {
  children: ReactNode
}

const Content: FC<IContentProps> = ({ children }) => {
  return (
    <main className='flex flex-1 dark:text-white'>
      <Container className='flex-1 py-3'>{children}</Container>
    </main>
  )
}

export default Content
