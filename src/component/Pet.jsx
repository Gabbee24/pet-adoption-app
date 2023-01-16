import React from 'react'

const Pet = ({name, animal, breed}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h4>{animal}</h4>
        <h5>{breed}</h5>
    </div>
  )
}

export default Pet