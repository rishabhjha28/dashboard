import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
        <div>
            <img className='delete' src="ic_delete.svg" alt="delete" />
            <div className="content">{props.content}</div>
            <div className='pb'>
                <div style={{backgroundColor:props.color}} className = "img-icon"><img src={props.img} alt="img-icon" /></div>
                <div className="value">{props.value}</div>
            </div>
        </div>
        <div className="comment">
            {props.comment}
        </div>
    </div>
  )
}
