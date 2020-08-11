import React from 'react'
import AddTodo from './components/AddTodo'
import { connect } from 'react-redux'
import TodoList from './components/TodoList'
export function TodoApp() {
    return (
        <div>
            <h3>Todo List</h3>
            <AddTodo/>
            <TodoList/>
        </div>
    )
}

// export default TodoApp