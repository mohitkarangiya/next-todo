"use client";
import { useRef,FormEvent, RefObject } from "react";
import { addTodo,testServerAction } from "../lib/actions";
import { inputClass } from "./styles";
export default function NewTodo()
{
    const formRef = useRef() as RefObject<HTMLFormElement>;
    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formRef.current?.reset();
        await addTodo(formData);
    };

    return(
        <div className="fixed bottom-1 left-[50%] -translate-x-[50%] w-full lg:w-[50%]">
            <form ref={formRef} className="w-full flex" action={addTodo}>
                <input className={`${inputClass} flex-grow  mr-2  outline-blue-500`} type="text" required name="todoText" id="todoText"/>
                <button className="flex bg-blue-400 text-white px-4 py-2 text-xl rounded-md hover:bg-blue-200">+</button>
            </form>
        </div>
    );
}