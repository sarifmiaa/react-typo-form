import React from 'react'
import DesignerInsuranceFlow from './DesignerInsurance'
import DevloperInsuranceFlow from './DeveloperInsurance'
import style from './style.module.css'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.desIns]: 'Designer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  return (
    <div className={style.buyflow}>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {props.productId === ProductIds.devIns && <DevloperInsuranceFlow />}
      {props.productId === ProductIds.desIns && <DesignerInsuranceFlow />}
    </div>
  )
}

export default Buyflow
