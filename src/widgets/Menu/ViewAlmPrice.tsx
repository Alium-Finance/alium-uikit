import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import getMainDomain from '../../util/getMainDomain'
import { IconTokenAlm } from './icons/IconTokenAlm'

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #0b1359;
  transition: all 500ms ease-out;
  opacity: 0;

  &.true {
    opacity: 1;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfefed;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`

const ViewAlmPrice: FC = () => {
  const [price, setPrice] = useState<null | string>(null)
  let mainDomain = getMainDomain()
  mainDomain = mainDomain.includes('localhost') ? 'alium.finance' : mainDomain
  useEffect(() => {
    fetch(`https://stat.${mainDomain}/api/get-price/alium-swap/usd`)
      .then((rawResponse) => {
        return rawResponse.json()
      })
      .then((response) => {
        setPrice(response?.data?.price)
      })
  }, [])

  return (
    <Styled className={String(Boolean(price))}>
      <IconWrapper>
        <IconTokenAlm />
      </IconWrapper>
      ALM price: ${price}
    </Styled>
  )
}

export default ViewAlmPrice
