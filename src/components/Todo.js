import React from 'react'

function Todo(props) {
    console.log(props)
    // console.log('Todo', props)
    return (
        <div>
            {props.apiTodo.map((element,k) => {
                return (
                    <li>{element.title} id={k.id}</li>
                )
            })}
            <li>{props.apiTodo.title}</li>
            {/* <p>{props.task}</p>
            <button className={props.claskey}
                onClick={props.handledelete}>
                Delete
            </button>
            <button onClick={props.Updatelist}
                className={props.claskey}>
                Edit
            </button> */}
        </div>
    )
}

export default Todo
