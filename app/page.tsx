import TodoList from "./ui/TodoList";
import NewTodo from "./ui/NewTodo";
export default function Page()
{
  return (
    <main className="mx-auto max-w-screen-xl">
      <TodoList/>
      <NewTodo/>
    </main>
  );
}