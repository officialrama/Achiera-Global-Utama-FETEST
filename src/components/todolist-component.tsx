'use client'

import { useRouter } from 'next/navigation';
import * as React from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [newTodo, setNewTodo] = React.useState<string>("");
  const [nextId, setNextId] = React.useState<number>(1);
  const router = useRouter();

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask: Todo = {
        id: nextId,
        text: newTodo,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
      setNextId(nextId + 1); 
    }
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const goToDetail = (id: number, text: string) => {
    const encodedText = encodeURIComponent(text);
    router.push(`/todolist/${id}?text=${encodedText}`);
  };
  return (
    <div >
        
      <div className='flex flex-row gap-8 justify-between pb-5'>
        <input
          className='rounded-lg border border-gray-500'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
        />
        <button className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44' onClick={addTodo}>Add</button>
      </div>

      <ol className='list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
        <div className='grid grid-cols-2 gap-5 justify-between'>
        {todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <li className="cursor-pointer text-blue-600 hover:underline" onClick={() => goToDetail(todo.id, todo.text)}>
                {todo.text}
              </li>
              <button
                className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm h-10'
                onClick={() => removeTodo(todo.id)}>
                Delete
              </button>
            </React.Fragment>
          ))}
        </div>
      </ol>
    </div>
  );
};

export default TodoList;
