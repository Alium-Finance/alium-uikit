import React, { useState } from 'react'
import { sample } from 'lodash'
import { alertVariants } from '../../components/Alert'
import Button from '../../components/Button/Button'
import ToastPending from './ToastPending'
import { getMainDomain } from '../../util'
import { ErrorConnect } from '../../widgets/Toast/types'

export default {
  title: 'components/ToastPending',
  component: ToastPending,
  argTypes: {},
}

export const Default: React.FC = () => {
  const [error, seterror] = useState<ErrorConnect>(null)
  const toastError: ErrorConnect = {
    code: '-32002',
    name: 'test',
    message: 'test',
  }
  return (
    <div>
      <Button
        onClick={() => {
          seterror(toastError)
        }}
      >
        Make error connection
      </Button>
      <Button
        onClick={() => {
          seterror(null)
        }}
      >
        Clear
      </Button>
      <ToastPending error={error} />
    </div>
  )
}
