"use client";
import { useRef, FormEvent, RefObject, useState } from "react";
import { addTodo } from "../lib/actions";
import { inputClass } from "./styles";
const initialState = { message : "" };

export default function NewTodo()
{
    const formRef = useRef() as RefObject<HTMLFormElement>;
    const [state, setState] = useState(initialState);
    const [isPending,setIsPending] = useState(false);

    async function handleSubmit (event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        setIsPending(true);

        const form : HTMLFormElement = event.currentTarget;
        const formData = new FormData(form);

        try
        {
            const result = await addTodo(state,formData);
            setState(result);
        } catch(error) {
            console.log("Error adding todo:", error);
        } finally {
            formRef.current?.reset();
            setIsPending(false);
        }
    }

    return(
        <div className="fixed bottom-1 left-[50%] -translate-x-[50%] w-full lg:w-[50%]">
            <p>{state.message}</p>
            <form ref={formRef} className="w-full flex" onSubmit={handleSubmit}>
                <InputAndSubmitButton isPending={isPending}/>
            </form>
        </div>
    );
}

export function InputAndSubmitButton({isPending}:{isPending:boolean})
{
    return(
        <>
        <input className={`${inputClass} flex-grow  mr-2  outline-blue-500 disabled:bg-gray-400`} disabled={isPending} type="text" required name="todoText" id="todoText"/>
        <button type="submit" disabled={isPending} className="flex disabled:cursor-wait bg-blue-400 text-white px-4 py-2 text-xl rounded-md hover:bg-blue-200 disabled:bg-gray-600">+</button>
        </>
    );
}