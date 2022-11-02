import React from "react"
import './App.css'
import Form from "./Components/Form"
import Start from "./Components/Start"

function App() {
  const [questions , setQuestions] = React.useState([])

  React.useEffect(()=> {
    fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple').then(res => res.json()).then(data => setQuestions(data))

  },[])

  console.log(questions)

return (

  // <Start />
  <Form/>
    )

}

export default App
