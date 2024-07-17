import React from 'react';
import { FetchTodos } from '../lib/data';
import  TodoItem from '../ui/TodoItem';
export default async function TodoList()
{
    const todos = await FetchTodos();

    return(
        <div className='flex flex-col w-full lg:w-[50%] mx-auto'>
            {todos.map((todo)=><TodoItem {...todo} key={todo.id}/>)}
        </div>
    );
}