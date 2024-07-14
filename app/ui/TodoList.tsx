import React from 'react';
import { FetchTodos } from '../lib/data';
import  TodoItem from '../ui/TodoItem';
export default async function TodoList()
{
    const todos = await FetchTodos();
    console.log("Todos");
    console.log(todos);

    return(
        <div className='flex flex-col'>
            {todos.map((todo)=><TodoItem {...todo} key={todo.id}/>)}
        </div>
    );
}