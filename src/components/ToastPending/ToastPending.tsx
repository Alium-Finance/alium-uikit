import React, { FC, useEffect, useState } from 'react'
import { ErrorConnect } from '../../widgets/Toast'
import Toast from '../../widgets/Toast/Toast'
import { ErrorNetworkConnection, ToastProps } from '../../widgets/Toast/types'
import { alertVariants } from '../Alert'

type Props = {
  error?: ErrorConnect
}

const isPendig = (error: ErrorConnect) => {
  return Boolean(error?.code && error.code?.toString() === ErrorNetworkConnection.PENDING)
}
const ToastPending: FC<Props> = ({ error }) => {
  const [toast, setToast] = useState<ToastProps['toast'] | null>(null)

  const onRemove = () => {
    setToast(null)
  }
  useEffect(() => {
    if (error && isPendig(error)) {
      setToast({
        id: 'id-pending',
        title: 'Confirm the action in your wallet',
        description: '',
        type: alertVariants.DANGER,
      })
    }
  }, [error])

  if (!toast) {
    return null
  }
  return <Toast key={toast.id} toast={toast} onRemove={onRemove} ttl={6000} style={{ top: `${20}px`, zIndex: '999' }} />
}
export default ToastPending
