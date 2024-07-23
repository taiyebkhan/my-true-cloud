import React from 'react'
import SecurityEndHeading from './SecurityEndHeading'
import crm from "./../../../assets/img/crm-screenshots-img.png"

export default function SecurityScreenshots() {
  return (
    <>
      <div className="innerContainer">
      <SecurityEndHeading heading='Screenshots' paragraph="Lorem ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus
        justo egestas. Massa a pulvinar felis mattis leo in semper in. Lorem
        ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus justo
        egestas. Massa a pulvinar felis mattis leo in semper in."/>
        <img src={crm} alt="" />
        </div>
    </>
  )
}
