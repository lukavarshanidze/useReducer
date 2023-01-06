import React, { useState } from 'react'
import { useReducer } from 'react';
import Todo from './Todo';

// const ACTIONS = { INCREMENT: 'increment',  DECREMENT: 'decrement'} second way of useReducer()
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}
function App() {
    const [todos, dispatch] = useReducer((todos, action) => {
        
        switch(action.type) {
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.name)]
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if(todo.id === action.payload.id) {
                        return {...todo, complete: !todo.complete}
                    }
                    return todo
                });
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo === true)
        }
    }, []);
    
    const [name, setName] = useState('')


    function newTodo(name) {
        return { id: Date.now(), name: name, complete:false}
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }});
        setName('')
    }

  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                 type="text" 
                 value={name} 
                 onChange={e => setName(e.target.value)}/>
            </form>
                 {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                 })}

          

            {/*
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        *///this is second way of useReducer()
            }  

            
        </div>
    )
}
export default App;
