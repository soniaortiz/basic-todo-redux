import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    const todos  = state.addTodoReducer.todoList
    return {
        todos: todos
    }
}

const createList = (item, index)=>{
return <li key={index}>{item.content}</li>
}


const TodoList = ({todos}) => {
    return (
        <ul>
            {
                todos && todos.map((obj, index)=>{
                    return createList(obj, index)
                })
            }
        </ul>
    )
}

export default connect(mapStateToProps)(TodoList)