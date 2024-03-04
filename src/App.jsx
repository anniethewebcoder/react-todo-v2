import AddTodoForm from './AddTodoForm'
import './App.css'
import TodoList from './TodoList'
import { useState } from 'react'

function App() {

  const [newTodo, setNewTodo] = useState()

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </>
  )
}

export default App
