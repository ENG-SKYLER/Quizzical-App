import React from 'react'
import pattern1  from '../Assets/blue-pattern.svg'
import pattern2  from '../Assets/yellow-pattern.svg'

function Start() {
  return (
    <div className='start'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button> Start quiz</button>

<div className="pattern1">
    <img src= {pattern1} alt="" />
</div>
<div className="pattern2">
<img src= {pattern2} alt="" />
</div>
    </div>
  )
}

export default Start