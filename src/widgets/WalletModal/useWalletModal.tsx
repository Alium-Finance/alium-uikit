import React from 'react'
import { useModal } from '../Modal'
import ConnectModal from './ConnectModal'
import AccountModal from './AccountModal'
import { Login } from './types'
import { getChainId } from '../../util'
import { ErrorConnect } from '../Toast/types'

interface ReturnType {
  onPresentConnectModal: () => void
  onPresentAccountModal: () => void
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string,
  title?: string,
  logoutTitle?: string,
  balance?: string,
  explorerName?: string,
  explorerLink?: string,
  onTransactionHistoryHandler?: void,
  balanceHook?: void,
  errorConnect?: ErrorConnect
): ReturnType => {
  const id = getChainId()

  const [onPresentConnectModal] = useModal(<ConnectModal login={login} title={title} errorConnect={errorConnect} />)
  const [onPresentAccountModal] = useModal(
    <AccountModal
      account={account || ''}
      logout={logout}
      title={title}
      logoutTitle={logoutTitle}
      balance={balance}
      explorerName={explorerName}
      explorerLink={explorerLink}
      tokenSymbol={id === 56 || id === 97 ? 'BNB' : 'HT'}
      networkName={id === 56 || id === 97 ? 'Binance Smart Chain' : 'Huobi ECO Chain'}
      onTransactionHistoryHandler={onTransactionHistoryHandler}
      balanceHook={balanceHook}
    />
  )
  // useEffect(()=>{
  //   onPresentAccountModal()
  // }, [balance])
  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
