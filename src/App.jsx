import React, { useEffect } from "react"
import './App.css'
import Form from "./Components/Form"
import Start from "./Components/Start"
import axios from "axios"

function App() {
  const [questions , setQuestions] = React.useState([])
  const [correctAnswer , setCorrectAnswer] = React.useState([{
    isCorrect : true
  }]);
  const [remainingAnswer , setRemainingAnswer] = React.useState([{
  }])
  let correct = [];
  let answer = [];

  const quiz = questions.results && questions.results.map(data => {
    correct.push(data.correct_answer)
    answer.push([...data.incorrect_answers])
    return   <Form quiz={data.question} ans={data.incorrect_answers} />
  })

  React.useEffect(()=>{
    setCorrectAnswer(prevValue => {
      return {
        ...prevValue,
        value : correct[0]
      }
    } ,
    answer.map((ans) => {

        setRemainingAnswer(prevValue => {
          return {
            ...prevValue ,
            value : ans
          }
        })
    })
    )
    },[])

    console.log(correctAnswer)
    console.log(remainingAnswer)
  // React.useEffect(()=>{
  //   setAnswers(answer) 
  // },[])
// console.log(answer)
// console.log(correct)





  
  React.useEffect(()=> {
    axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(res => setQuestions(res.data))
    .catch(data => console.log(data))
  },[])



  
  // const form = questions.map((data) => { 
  //   return <Form  ques = {data.question}/>
  // })


return (
<div>
  {quiz}
</div>
    )

}

export default App
