import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
class App extends Component {
  constructor(props) {
    // console.log(props)
    super(props)
    this.state = {
      todo: '',
      todos: [],
      apiTodo: []

    }
  }
  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/todos/').then((response) => (this.setState({ apiTodo: response.data })))
  }

  handleChange(event) {
    event.preventDefault()
    // console.log(event.target.value)
    this.setState({
      todo: event.target.value
    })
    console.log(this.state.apiTodo)
  }

  handleSaveInput() {
    if (this.state.todo.length !== 0) {
      // this.state.todos.push(this.state.todo)
      this.setState({
        todos: [...this.state.todos, this.state.todo],
        todo: ''
      })
    }
    // console.log(this.state.todos)
  }
  handleDelete(event) {
    var index = event.target.className
    var copy = [...this.state.todos]
    copy.splice(index, 1)
    this.setState({
      todos: copy
    })
  }

  handleEdit = (event) => {
    var index = event.target.className
    var newList = prompt("update your to do ")
    var copy = [...this.state.todos]
    // console.log(newList)
    copy.splice(index, 1)
    copy[index] = newList
    this.setState({
      todos: copy
    })
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <AddTodo
          addtodo={this.state.todo} handleChange={this.handleChange.bind(this)} handleSaveInput={this.handleSaveInput.bind(this)} val={this.state.todo}
        />
        <TodoList
          apiTodo={this.state.apiTodo}
          update={this.handleEdit} alltodos={this.state.todos}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default App;
