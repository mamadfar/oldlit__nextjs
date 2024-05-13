'use client'

import {FC, ReactNode, useLayoutEffect, useState, createContext} from 'react'
import { useRouter} from 'next/navigation'
import { Modal as AntModal, ModalProps } from 'antd'
import {ModalContext} from "@/contexts/Modal.context";

interface IModalProps extends ModalProps {
  children: ReactNode
  title: string | ReactNode
}

const Modal: FC<IModalProps> = ({ children, title, ...props }) => {
  const [modalOpen, setModalOpen] = useState(true)

  const router = useRouter()
  // const pathname = usePathname()

  const handleOnClose = () => {
    setModalOpen(false)
    router.back()
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // useEffect(() => {
  //   !pathname.includes('/login-register') && setModalOpen(false)
  // }, []);

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
      <ModalContext.Provider value={{
        modalOpen,
        setModalOpen
      }}>
      {children}
      </ModalContext.Provider>
    </AntModal>
  )
}

export default Modal
