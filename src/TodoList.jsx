function TodoList() {
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

export default TodoList