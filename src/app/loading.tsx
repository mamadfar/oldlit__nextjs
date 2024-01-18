import { ImSpinner10 } from 'react-icons/im'

const Loading = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <ImSpinner10 className='h-8 w-8 animate-spin text-red-600' />
    </div>
  )
}

export default Loading
