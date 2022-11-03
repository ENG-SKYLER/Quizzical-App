import React from "react"
import './App.css'
import Form from "./Components/Form"
import Start from "./Components/Start"
import axios from "axios"

function App() {
  const [questions , setQuestions] = React.useState([])

  const quiz = questions.results && questions.results.map(data => {
    return  data ? <Form quiz={data.question} ans={data.incorrect_answers} /> : console.log('dataNotFetch')
})



  
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
