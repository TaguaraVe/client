import { revalidatePath } from 'next/cache';

type Todo = {
  id: string;
  descrition: string;
};

const todos: Todo[] = [{ id: 'uno', descrition: 'Learn Server Actions' }];

export default function About() {
  const addTodo = async (data: FormData) => {
    'use server';
    const todo = data.get('todo') as string;
    todos.push({ id: todos.length + 'dos', descrition: todo });
    revalidatePath('/about');
    console.log('Tofos', todos);
  };

  return (
    <main className="gradient flexS flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
      <h1 className="title mt-20">Taguara Digital</h1>
      <h1 className="subtitle text-white">About Page</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.descrition}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="border-2 border-secondary-300 py-2 px-4 rounded"
        />
        <button
          type="submit"
          className="bg-secondary-200 disabled:bg-neutral-300 inline-flex items-center rounded-lg ml-5 py-2 px-4"
        >
          Add Todo
        </button>
      </form>
    </main>
  );
}
