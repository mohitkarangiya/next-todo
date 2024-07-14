"use client";
import { FormEvent, RefObject, useRef } from 'react';
import { deleteTodo,markTodo } from '../lib/actions';

export default function TodoItem({id,text,completed}:{id: number,text: string,completed: boolean})
{
    return(
        <div className='w-full mt-8 hover:bg-gray-200 lg:w-[50%] mx-auto flex'>
            <ToggleTodo id={id} completed={completed}/>
            <span className={`flex-grow ${completed?"line-through":""} inset-y-0 text-3xl`}>{text}</span>
            <DeleteTodo id={id}/>
        </div>
    );
}

function ToggleTodo({id,completed}:{id:number,completed:boolean})
{
    const toggleTodoWithid = markTodo.bind(null,id,!completed);
    const formRef = useRef() as RefObject<HTMLFormElement>;
    const handleCheckBoxChange = (event:FormEvent<HTMLInputElement>)=>
    {
        formRef.current?.requestSubmit();
    }
    return(
        <form ref={formRef} action={toggleTodoWithid}>
            <input onChange={handleCheckBoxChange} type="checkbox" className='size-8 mr-4 my-auto text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500' defaultChecked={completed}/>
        </form>
    )
}

function DeleteTodo({id}:{id:number})
{
    const deleteTodoWithId = deleteTodo.bind(null,id);
    return(
        <form className='bg-red-500 text-white' action={deleteTodoWithId}>
        <button className='size-8 text-4xl'> X </button>
        </form>
    )
}