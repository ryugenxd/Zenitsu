import React from 'react'
import { HorizontalShadowInterface } from '../interfaces'

const HorizontalShadow:React.FC<HorizontalShadowInterface> = ({top,left}:HorizontalShadowInterface) => {
  return (
    <div className='absolute bg-black h-[50px] w-full backdrop-blur-[1rem]' style={{top,left}}></div>
  )
}

export default HorizontalShadow