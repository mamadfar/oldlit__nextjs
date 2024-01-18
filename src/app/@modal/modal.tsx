'use client'

import {FC, ReactNode, useLayoutEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { Modal as AntModal, ModalProps } from 'antd'

interface IModalProps extends ModalProps {
  children: ReactNode
  title: string | ReactNode
}

const Modal: FC<IModalProps> = ({ children, title, ...props }) => {
  const [modalOpen, setModalOpen] = useState(true)

  const router = useRouter()

  const handleOnClose = () => {
    setModalOpen(false)
    router.back()
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AntModal
      title={title}
      centered
      open={modalOpen}
      onCancel={handleOnClose}
      destroyOnClose
      footer={false}
      keyboard={true}
      {...props}
    >
      {children}
    </AntModal>
  )
}

export default Modal
