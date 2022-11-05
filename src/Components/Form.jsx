import React from 'react';
import {encode} from 'html-entities';

function Form(props) {
  return (
    <div className="container">


<div className='form'>
<h1 dangerouslySetInnerHTML={{__html: props.quiz}}/>
      <div className='answers'>
                  <div>
                  <input type="radio" name={props.id} id={props.ans[0]} />
                    <label htmlFor={props.ans[0]}>{props.ans[0]}</label>
                  </div>

          
                  <div>
                  <input type="radio" name={props.id} id={props.ans[1]} />
                    <label htmlFor={props.ans[1]}>{props.ans[1]}</label>
                  </div>

                  <div>
                  <input type="radio" name={props.id} id={props.ans[2]} />
                    <label htmlFor={props.ans[2]}>{props.ans[2]}</label>
                  </div>

                  <div>
                  <input type="radio" name={props.id} id={props.ans[3]} />
                    <label htmlFor={props.ans[3]}>{props.ans[3]}</label>
                  </div>
          
      </div>
</div>
<br />
<hr />
    </div>
  )
}

export default Form