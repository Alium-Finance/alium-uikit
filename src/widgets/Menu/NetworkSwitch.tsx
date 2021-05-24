import React, { useState } from 'react'
import styled from 'styled-components'
import { NetworksConfig } from '../WalletModal/types'
import { networks } from '../WalletModal/config'
import { ArrowDropDownIcon, ArrowDropUpIcon } from '../../components/Svg'
import { getChainId, setChainId } from '../../util'

const StyledDropDown = styled.div`
  width: 232px;
  border: 1px solid #6c5dd3;
  box-sizing: border-box;
  border-radius: 6px;
  height: 48px;
  position: relative;
  cursor: pointer;
  margin-right: 24px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  > svg * {
    transition: stroke 200ms ease-in-out;
  }
  :hover {
    background-color: #6c5dd3;
    > * {
      color: white;
    }
    > svg * {
      stroke: white;
    }
  }

  > svg {
    fill: #6c5dd3;
    position: absolute;
    right: 23px;
    top: 18px;
  }
  @media screen and (max-width: 967px) {
    width: 40px;
    height: 40px;
    display: flex;
    > svg {
      display: none;
    }
  }
`

const StyledSelectedOption = styled.p`
  position: absolute;
  padding-left: 47px;
  margin-top: 15px;
  letter-spacing: 0.3px;
  color: #6c5dd3;
  font-size: 14px;

  @media screen and (max-width: 967px) {
    display: none;
  }
`

const StyledOptionsContainer = styled.div`
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  margin-top: 48px;
  background: white;
  padding: 2px;
  box-shadow: 0px 6px 12px rgba(185, 189, 208, 0.4);
  border-radius: 6px;
  @media screen and (max-width: 790px) {
    position: fixed;
    width: calc(100vw - 54px);
  }
  @media screen and (max-width: 967px) {
    position: absolute;
    left: 0;
    width: 180px;
  }
`

const StyledOption = styled.div`
  padding: 12px;
  text-align: left;
  color: #8990a5;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  cursor: pointer;
  border-radius: 6px;
  :hover {
    background-color: #f5f7ff;
    color: #0b1359;
  }
`

const StyledIconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
  @media screen and (max-width: 967px) {
    margin: auto;
    position: initial;
    width: 24px;
    height: 24px;
  }
`

const NetworkSwitch: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false)
  const id = getChainId()
  const [selectedOption, setSelectedOption] = useState(id === 256 || id === 128 ? networks[1].label : networks[0].label)

  const handleClick = (item: NetworksConfig) => {
    setSelectedOption(item.label)
    setChainId(item.chainId)
  }

  const { icon: Icon } = networks[networks.findIndex((network) => network.label === selectedOption)]

  return (
    <StyledDropDown onClick={() => setShowOptions(!showOptions)}>
      <StyledIconContainer>
        <Icon />
      </StyledIconContainer>
      <StyledSelectedOption>{selectedOption}</StyledSelectedOption>
      {!showOptions ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      {showOptions && (
        <StyledOptionsContainer>
          {networks.map((item) => (
            <StyledOption key={item.title} onClick={() => handleClick(item)}>
              {item.label}
            </StyledOption>
          ))}
        </StyledOptionsContainer>
      )}
    </StyledDropDown>
  )
}

export default NetworkSwitch
