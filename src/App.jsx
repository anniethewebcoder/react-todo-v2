import './App.css'

function App() {

  const todoList = [
    {
      id: 1, 
      title: "Complete Assigment"
    },
    {
      id: 2,
      title: "Submit Assignment"
    },
    {
      id: 3,
      title: "Wait for the review"
    }
  ]

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {
          todoList.map(function (item) {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
