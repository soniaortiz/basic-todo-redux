import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from "../actions/actions";
const mapStateToProps = (state) => {
    const todos = state.addTodoReducer.todoList
    return {
        todos: todos,
        deleteItemProp: deleteItem
    }
}

const mapDispatchToProps = {  
        deleteItemProp: deleteItem
}

const createList = (item, index, deleteItemDispatcher) => {
    return (
        <li
            key={index}
            id={item.id}
            onClick={deleteItemDispatcher}
        >
            {item.content}
        </li>
    )
}


const TodoList = (state) => {
    return (
        <ul>
            {
                state.todos && state.todos.map((obj, index) => {
                    return createList(obj, index, state.deleteItemProp)
                })
            }
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)