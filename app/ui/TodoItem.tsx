"use client";
import { FormEvent, RefObject, useRef } from 'react';
import { deleteTodo,markTodo } from '../lib/actions';

export default function TodoItem({id,text,completed}:{id: number,text: string,completed: boolean})
{
    return(
        <div className=' mt-5 shadow-md hover:bg-blue-500 transition-all lg:hover:scale-105 hover:text-white bg-white rounded-md p-2 flex last:mb-20'>
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

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await markTodo(id,!completed);
          } catch (error) {
            console.error('Error marking todo:', error);
          } finally {
            if(checkBoxRef.current)
                checkBoxRef.current.disabled = false; // Re-enable checkbox after submission
          }
    };

    return(
        <form ref={formRef} className='size-8 mx-2 flex-shrink-0 my-auto' onSubmit={handleSubmit} >
            <input ref={checkBoxRef} onChange={(e)=>{e.target.disabled=true;formRef.current?.requestSubmit();}} type="checkbox" defaultChecked={completed}
             className='size-full text-blue-400 rounded-full focus:ring-0 focus:ring-offset-0'/>
        </form>
    )
}

function DeleteTodo({id}:{id:number})
{
    const deleteTodoWithId = deleteTodo.bind(null,id);
    return(
        <form className=' text-white flex-shrink-0 my-auto' action={deleteTodoWithId}>
        <button className='size-8 text-2xl bg-red-500 rounded-md'>X</button>
        </form>
    )
}