"use client";
import { useRef,FormEvent, RefObject } from "react";
import { addTodo } from "../lib/actions";
import { inputClass } from "./styles";
export default function NewTodo()
{
    const formRef = useRef() as RefObject<HTMLFormElement>;
    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await addTodo(formData);
        formRef.current?.reset();
    };
    return(
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full lg:w-[50%] mb-3">
            <form ref={formRef} className="w-full mt-8 flex" onSubmit={handleSubmit}>
                <input className={`${inputClass} flex-grow bg-gray-100 mr-2  outline-blue-500`} type="text" required name="todoText" id="todoText"/>
                <button className="flex bg-blue-400 text-white px-4 py-2 text-xl rounded-md hover:bg-blue-200">+</button>
            </form>
        </div>
    );
}