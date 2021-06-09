import React, { FC } from 'react'
import styled from 'styled-components'
import { AddIcon } from '../../components/Svg'

export const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 40px;

  border-radius: 6px;
  margin-right: 6px;
  background: #6c5dd3;
  color: #ffffff;

  &.true {
    background: #ebedf9;
    color: #6c5dd3;
  }

  @media screen and (min-width: 768px) {
    padding: 0 24px;
    height: 48px;
  }

  @media screen and (min-width: 968px) {
    display: none;
  }

  .icon {
    margin-right: 14px;
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: initial;
  }
`

type props = {
  isAccount: boolean
  accountEllipsis: string | null
  onClick: () => void
}

export const ConnectButton: FC<props> = ({ isAccount, accountEllipsis, onClick }) => {
  return (
    <StyledButton className={isAccount ? 'true' : ''} onClick={onClick}>
      {!isAccount && (
        <div className="icon">
          <AddIcon color="#fff" />
        </div>
      )}
      {isAccount ? accountEllipsis : 'connect'}
    </StyledButton>
  )
}
