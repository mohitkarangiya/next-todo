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
    const formRef = useRef() as RefObject<HTMLFormElement>;
    const checkBoxRef = useRef() as RefObject<HTMLInputElement>;
    console.log("Rerender");

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await markTodo(id,!completed);
          } catch (error) {
            console.error('Error marking todo:', error);
          } finally {
            checkBoxRef.current.disabled = false; // Re-enable checkbox after submission
          }
    };

    return(
        <form ref={formRef} className='size-8 mx-2 my-auto ' onSubmit={handleSubmit} >
            <input ref={checkBoxRef} onChange={(e)=>{e.target.disabled=true;formRef.current?.requestSubmit();}} type="checkbox" className='size-full text-blue-400 rounded-md focus:ring-0 focus:ring-offset-0' defaultChecked={completed}/>
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