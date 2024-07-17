import TodoList from "./ui/TodoList";
import NewTodo from "./ui/NewTodo";

import { TimeWaster } from "./lib/actions";

export default async function Page()
{
  // await TimeWaster(5000);

  return (
    <main className="mx-auto max-w-screen-xl">
      <TodoList/>
      <NewTodo/>
    </main>
  );
}