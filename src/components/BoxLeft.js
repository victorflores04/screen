import React from 'react'
import red from '../assets/content/fgh.JPG'
import black from '../assets/content/abc.JPG'
export const BoxLeft = () => {
    return (
        <div className="box__left">
            <div className="box__label">
                <div className="box__label--text">fw20 Drop</div>
                <div className="box__label--textt">Is Out Now</div>
            </div>
            <div className="btn btn-p box__button">shop all</div>
            <div className="box__container-imgs">
                <div className="box__img">
                    <img src={red} />
                </div>
                <div className="box__img-right">
                    <img src={black} />
                </div>
            </div>
            <div className="box__block">
                <div className="box__block--container">holo</div>
                <div>text</div>
            </div>
        </div>
    )
}
