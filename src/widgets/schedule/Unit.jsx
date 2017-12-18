import React from 'react'

function highlight(type) {
  return type === 'lesson' ? 'highlighted shadow' : ''
}

const Unit = (props) => (
  <div
    className={ highlight(props.data.type) }
    style={{
      flexBasis: props.data.minutes,
      zIndex: props.index + 1
    }}
  >
    <span className={props.data.type} >
      { props.data.type === 'lesson' ? props.data.body : '' }
    </span>
  </div>
)

export default Unit
