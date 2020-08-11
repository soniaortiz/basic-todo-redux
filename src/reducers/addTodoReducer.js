import React from 'react'

const initialState = {
    todoList: []
}


const addTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, { id: action.payload.id, content: action.payload.todoText }]
            }
        case 'GET_LIST':
            return state
        default:
            return state
    }
}

export default addTodoReducer