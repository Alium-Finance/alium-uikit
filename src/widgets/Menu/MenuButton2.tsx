import React, { FC } from 'react'
import styled from 'styled-components'

export const StyledMenuButton2 = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  border-radius: 6px;
  margin-right: 6px;
  border: 1px solid #d2d6e5;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    padding: 0 8px;
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 968px) {
    display: none;
  }
`

type props = {
  onClick: () => void
}

export const MenuButton2: FC<props> = ({ onClick }) => {
  return <StyledMenuButton2 onClick={onClick} />
}
