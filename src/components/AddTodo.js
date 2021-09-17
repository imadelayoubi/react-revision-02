import React from 'react'

function AddTodo(props) {
    // console.log(props)
    return (
        <div className='TodoInput'>
            <h1>My Todo</h1>
            <input onChange={props.handleChange} className='todoInput' type='text' placeholder="Todo..."  value={props.val}></input>
            <button onClick={props.handleSaveInput} className='addSingleTodoBtn'><b>Add</b> </button>
            <button className='clearAllBtn'><b>Clear All</b></button>
        </div>
    )
}

export default AddTodo
