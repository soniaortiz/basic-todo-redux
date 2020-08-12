import React from 'react'

let id = -1
export const addTodo = (todoText)=>{
    return{
        type: 'ADD_TODO',
        payload:{
            id: new Date().getMilliseconds(),
            todoText 
        }
    }

}

export const getList = ()=>{
    return{
        type: 'GET_LIST'
    }
}

export const deleteItem = ({target})=>{
    return{
        type: 'DELETE_ITEM',
        payload:{
            id: target.id
        }
    }
}