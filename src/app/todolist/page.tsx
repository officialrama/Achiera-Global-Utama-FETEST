import TodoList from "@/components/todolist-component";

export default function TodoListPage() {

    return (
        <div className="flex flex-col items-center min-h-screen gap-16 p-10 font-[family-name:var(--font-geist-sans)]">
            <p className="text-6xl font-semibold">Todo List</p>
            <div>
            <TodoList />
            </div>
        </div>
    )
}