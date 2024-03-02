import TodoListItem from "./TodoListItem"

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
            return <TodoListItem key={item.id} todo={item.title} />
          })
        }
      </ul>
        </>
    )
}

export default TodoList