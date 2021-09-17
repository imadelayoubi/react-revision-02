import React from 'react'
import Todo from './Todo'
function TodoList(props) {
    // console.log('alltodos', props)
    return (
        <div className='container'>
            {props.alltodos.map((todo, key) => {
                return (
                    <Todo
                        apiTodo={props.apiTodo}
                        Updatelist={props.update}
                        task={todo}
                        claskey={key}
                        key={key + 1}
                        handledelete={props.handleDelete} />
                )
            })}

        </div>
    )
}

export default TodoList
