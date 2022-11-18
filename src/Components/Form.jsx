import React from 'react';
import {encode} from 'html-entities';

function Form(props) {
  const quiztion = props.ans.map((anss, index) => {
    return (
      <div>
      <input onClick={props.setAns} type="radio" name={props.quiz} id={props.id + index } key={props.id} value = {anss}/>
        <label   htmlFor={props.id + index}>{anss}</label>
      </div>
    )
  })
  return (
    <div className="container">


<div className='form'>
<h1 dangerouslySetInnerHTML={{__html: props.quiz}}/>
      <div className='answers'>
                  {/* <div>
                  <input onClick={props.handleClick} type="radio" name={props.quiz} id={props.id} />
                    <label htmlFor={props.id}>{props.ans[0]}</label>
                  </div> */}
{quiztion}
          
                  {/* <div>
                  <input  onClick={props.handleClick} type="radio" name={props.quiz} id={props.id + 1} />
                    <label htmlFor={props.id + 1}>{props.ans[1]}</label>
                  </div>

                  <div>
                  <input onClick={props.handleClick} type="radio" name={props.quiz} id={props.id + 2} />
                    <label htmlFor={props.id + 2}>{props.ans[2]}</label>
                  </div>

                  <div>
                  <input onClick={props.handleClick} type="radio" name={props.quiz} id={props.id + 3} />
                    <label htmlFor={props.id + 3}>{props.ans[3]}</label>
                  </div> */}
          
      </div>
</div>
<br />
<hr />
    </div>
  )
}

export default Form