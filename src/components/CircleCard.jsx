import React from 'react'

const CircleCard = (props) => {
  return (
    <>
        <div className={`circlecard text-center ${ props.Bgcolor }`}>
            <div className="conts d-flex justify-content-center align-items-end">
                <p className="text-uppercase text-white">{props.Title}</p>
            </div>
        </div>
    </>
  )
}

export default CircleCard