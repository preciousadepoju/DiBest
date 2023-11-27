import React from 'react'

const SpotButton = (props) => {
  return (
    <div>
    <button className={props.color}>{props.title}</button>
    </div>
  )
}

export default SpotButton