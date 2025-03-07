"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from 'zod';
import { redirect } from "next/navigation";

const TodoSchema = z.object(
{
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
});

const NewTodoSchema = TodoSchema.omit({id:true,completed:true});

export async function addTodo( prevState: { message: string }, formData : FormData )
{
    // await TimeWaster(3000);

    const {text} = NewTodoSchema.parse({
        text: formData.get("todoText"),
    });

    try
    {
        await sql`insert into todos (text,completed) values (${text},false)`;
        revalidatePath("/");
        return { message: `Inserted new todo` };
    }
    catch(error)
    {
        console.error("Database Error",error);
        return { message: `Error adding todo` };
    }
}


export async function deleteTodo(id:number)
{
    try
    {
        await sql`delete from todos where id = ${id}`;
        revalidatePath("/");
        // return { message: `Deleted Todo with id = ${id}` };
    }
    catch(error)
    {
        console.error("Database Error",error);
        throw new Error("Unable to delete Todo");
    }
}

export async function markTodo(id:number,completed:boolean)
{
    try
    {
        await sql`update todos set completed = ${completed} where id = ${id}`;
        revalidatePath("/");
        return { message: `Marked Todo as ${completed?"Completed":"Not Completed"} with id = ${id}` };
    }
    catch(error)
    {
        console.error("Database Error",error);
        throw new Error("Unable to mark Todo");
    }
}

export async function TimeWaster(timeToWaste : number)
{
    return new Promise((res)=>setTimeout(res,timeToWaste));
}

export async function testServerAction()
{
    console.log("Test Action called");
}