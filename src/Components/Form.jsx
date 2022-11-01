import React from 'react'

function Form() {
  return (
    <div className="container">


<div className='form'>
<h1>if the question will be visible to view in the selection board</h1>
      <div className='answers'>
                  <div>
                  <input type="radio" name="ans" id="ans1" />
                    <label htmlFor="ans1">ans1</label>
                  </div>

          
                  <div>
                  <input type="radio" name="ans" id="ans2" />
                    <label htmlFor="ans2">ans2</label>
                  </div>

                  <div>
                  <input type="radio" name="ans" id="ans3" />
                    <label htmlFor="ans3">ans3</label>
                  </div>

                  <div>
                    <input type="radio" name="ans" id="ans4" />
                    <label htmlFor="ans4">ans4</label>
                  </div>
          
      </div>
</div>
<br />
<hr />
    </div>
  )
}

export default Form