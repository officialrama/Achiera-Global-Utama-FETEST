'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


interface TaskDetailProps {
  params: { id: string};
}

const TodoDetail: React.FC<TaskDetailProps> = ({ params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = params;
  const text = searchParams.get('text');
  
  useEffect(() => {
    if (!id) {
      router.push('/todolist');
    }
  }, [id, text]);
  
  useEffect(() => {
    if (!id) {
      router.push('/todolist');
    }
  }, [id, text]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-80 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
     <p className="text-6xl font-semibold">Detail Todos</p>
      <div className="flex flex-row gap-3  text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <p className="mb-2">
         {id}
        </p>
        <p className="mb-2">
         {text}
        </p>
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={() => router.push('/todolist')}
        >
         Back
        </button>
      </div>
    </main>
  </div>
  );
};

export default TodoDetail;
