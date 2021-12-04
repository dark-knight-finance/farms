import React from 'react'
import BigNumber from 'bignumber.js'
import { IconButton, useModal, CalculateIcon } from '@pancakeswap-libs/uikit'
import ApyCalculatorModal from './ApyCalculatorModal'

export interface PoolApyButtonProps {
  lpLabel?: string
  suffix?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  addLiquidityUrl?: string
}

const PoolApyButton: React.FC<PoolApyButtonProps> = ({ lpLabel, suffix, cakePrice, apy, addLiquidityUrl }) => {
  // console.log(apy.toNumber())
  const _apy = apy.dividedBy(100)
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      lpLabel={lpLabel}
      suffix={suffix}
      cakePrice={cakePrice}
      apy={_apy}
      addLiquidityUrl={addLiquidityUrl}
    />,
  )

  const handleClickButton = (event): void => {
    event.stopPropagation()
    onPresentApyModal()
  }

  return (
    // <IconButton onClick={handleClickButton} variant="text" size="sm" ml="4px">
    <CalculateIcon style={{ cursor: 'pointer' }} onClick={handleClickButton} />
    // </IconButton>
  )
}

export default PoolApyButton
