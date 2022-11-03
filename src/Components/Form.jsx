import React from 'react';
import {encode} from 'html-entities';

function Form(props) {
  return (
    <div className="container">


<div className='form'>
<h1>{props.quiz} </h1>
      <div className='answers'>
                  <div>
                  <input type="radio" name={props.quiz} id={props.ans[0]} />
                    <label htmlFor={props.ans[0]}>{props.ans[0]}</label>
                  </div>

          
                  <div>
                  <input type="radio" name={props.quiz} id={props.ans[1]} />
                    <label htmlFor={props.ans[1]}>{props.ans[1]}</label>
                  </div>

                  <div>
                  <input type="radio" name={props.quiz} id={props.ans[2]} />
                    <label htmlFor={props.ans[2]}>{props.ans[2]}</label>
                  </div>

                  <div>
                    <input type="radio" name={props.quiz} id="ans4" />
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