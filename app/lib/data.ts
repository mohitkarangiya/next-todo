"use server";
import { sql } from "@vercel/postgres";
import { TodoItem } from "./definitions";

export async function FetchTodos()
{
    try
    {
        const data = await sql<TodoItem>`SELECT * FROM todos ORDER BY todos.id`;
        console.log("Todos Fetched");
        return data.rows;
    }
    catch(error)
    {
        console.error("Database Error",error);
        throw new Error("Unable to Fetch Todos");
    } 
}