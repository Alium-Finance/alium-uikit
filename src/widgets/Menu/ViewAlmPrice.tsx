import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import { getCookieOptions } from '../../config/getCookieOptions'
import { IconTokenAlm } from './icons/IconTokenAlm'

const cookies = new Cookies()

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

  useEffect(() => {
    const cookieAlmPrice = cookies.get('alm-price')
    setPrice(cookieAlmPrice ? String(cookieAlmPrice) : null)

    fetch('https://api.coingecko.com/api/v3/coins/alium-swap')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        const price = response?.market_data?.current_price?.usd
        if (price) {
          setPrice(price)
          cookies.set('alm-price', price, getCookieOptions())
        }
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
