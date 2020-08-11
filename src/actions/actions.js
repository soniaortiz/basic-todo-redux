import React from 'react'

const id = 0
export const addTodo = (todoText)=>{
    return{
        type: 'ADD_TODO',
        payload:{
            id: +id,
            todoText 
        }
    }

}

export const getList = ()=>{
    return{
        type: 'GET_LIST'
    }
}