import React from 'react'
import { BoxLeft } from './BoxLeft'
import { BoxRight } from './BoxRight'

export const BoxContent = () => {
    return (
        <div className="box__content">
            <BoxLeft/>
            <BoxRight/>
        </div>
    )
}
