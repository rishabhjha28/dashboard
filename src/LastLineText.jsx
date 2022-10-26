import React from 'react'

export const LastLineText = ({text}) => {
  return (
    <div className='lastlinetext'>
        {text} <img src="ic_tick.svg" alt="tick" />
    </div>
  )
}
