import React, { useCallback, useEffect } from "react"
import './App.css'
import Form from "./Components/Form"
import Start from "./Components/Start"
import axios from "axios"
import { nanoid } from 'nanoid'

function App() {
  const [questions , setQuestions] = React.useState([])
  // const [answers , setAnswers] = React.useState([])
  // const [correct , setCorrect] = React.useState([])

  // const quiz = questions.results && questions.results.map(data => {
  //   correct.push(data.correct_answer)
  //   answer.push([...data.incorrect_answers])
  //   return   <Form quiz={data.question} ans={data.incorrect_answers} />
  // })

  // React.useEffect(()=>{
  //   setCorrectAnswer(prevValue => {
  //     return {
  //       ...prevValue,
  //       value : correct[0]
  //     }
  //   } ,
  //   answer.map((ans) => {

  //       setRemainingAnswer(prevValue => {
  //         return {
  //           ...prevValue ,
  //           value : ans
  //         }
  //       })
  //   })
  //   )
  //   },[])

  // React.useEffect(()=>{
  //   setAnswers(answer) 
  // },[])
// console.log(answer)
// console.log(correct)




function answerId(answer , correctAns){
  if(answer === correctAns){
    console.log(true)
  }else{
    console.log(false)
  }
}
  

  // function setAns(event , questId , answersId){
  //   setQuestions(prev => {
  //     return (
  //       questions.map((quizzz , quizzId) => {
  //         if(questId === quizzId){
  //           return ({...quizzz , ChoosedAnswer: answersId })
  //         }else{
  //           return (quizzz)
  //         }
  //       })
  //     )
  //   })
  // }
  function setAns(event){
    setQuestions(questions => questions.map((quis)=> {
      return event.target.id.slice(0 , -1) === quis.id ? {...quis , ChoosedAnswer: event.target.value} : quis
    }))
  }
  // function chooose(event){
  //   questions.map((ques)=> {
  //     if((event.target.id.slice(0 , -1)) === ques.id){
  //       setQuestions((prev) =>{
  //         return(
  //           {
  //             ...prev,
  //             ChoosedAnswer: event.target.value
  //           }
  //         )
  //       })
  //     }

  //   })
  //   console.log(questions)
  // }


  React.useEffect(()=>{
    const fetchData =  async () => {
      const data = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
      const json = await data.json();
      setQuestions(json.results.map( result => {
        return ({
          question : result.question,
          correct : result.correct_answer,
          answers : result.incorrect_answers.concat([result.correct_answer]).map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value),
          // answers : result.incorrect_answers.splice(Math.floor(Math.random()) * (result.incorrect_answers.length + 1),0 ,result.correct_answerr )
          ChoosedAnswer : undefined,
          id : nanoid()
        })
      }))
    }
    fetchData()
  },[])
  const quiz = questions.map((quizz, index) => {
    return <Form 
    quiestionsArray = {questions}
    quiz={quizz.question} 
    ans={quizz.answers}
    id = {quizz.id}
    key = {quizz.id}
    setAns = {setAns}
    />
  })

  function sumbitingHandling(){
    console.log(questions)
  }

  



return (
<div>
  {quiz}
  <button onClick={sumbitingHandling}>sumbit</button>
</div>
    )

}

export default App


