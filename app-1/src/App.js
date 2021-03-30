import React, {useState } from 'react'
import List from './Component/List'
import AddTodo from './Component/AddTodo'
import './App.css'

const App = () => {

  const [todos, setTodos ] = useState (['cook','learn'])

  function addTodo (item) {
    const newTodos = [...todos,item]
    setTodos(newTodos)
  }

  return(
    <div className = "App" >
      <h3>This is the best code ever </h3>
      <AddTodo addTodo = {addTodo}/>
      <List todos = {todos} />
    </div>
  )
}
export default App