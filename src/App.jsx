import React, { useCallback, useEffect } from "react"
import './App.css'
import Form from "./Components/Form"
import Start from "./Components/Start"
import axios from "axios"

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





  
  // React.useEffect(()=> {
  //   axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
  //   .then(res => setQuestions(res.data))
  //   .catch(data => console.log(data))
  // },[])


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
        })
      }))
    }
    fetchData()
  },[])
  const quiz = questions.map((quizz, index) => {
    console.log(index)
    return <Form 
    quiz={quizz.question} 
    ans={quizz.answers}
    id = {index}
    // key = {index} 
    />
  })


  // const dataReallocated = useCallback((data) => {
  //   // data && data.map((answers) => {
  //   //   // let correctAnswers = answers.correct_answer;
  //   //   // setCorrect(correctAnswers)
  //   //   // let incorrectAnswers = answers.incorrect_answers;
  //   //   // let  allAnswers = incorrectAnswers
  //   //   // allAnswers.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)) ,0 ,correctAnswers )
  //   // })
  //   setQuestions(data)
  // }, [])

// let correctAnswers ;
//   const quiz = questions && questions.map((quizz) => {
//      correctAnswers = quizz.correct_answer;
//     let  incorrectAnswers = quizz.incorrect_answers;
//     let  allAnswers = incorrectAnswers
//     allAnswers.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)) ,0 ,correctAnswers )
//     console.log(correctAnswers)
//     return <Form quiz={quizz.question} ans={allAnswers} />
//   })

  // setCorrect(correctAnswers)

  
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
