'use client'

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-80 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <p className="text-6xl font-semibold">Soal Project</p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 cursor-pointer" onClick={() => router.push('/todolist')}>
           Todo List with TypeScript and React Hooks.
          </li>
          <li className="mb-2 cursor-pointer" onClick={() => router.push('/form')}>
           Form Register with Validation React Hooks Form.
          </li>
          <li className="mb-2 cursor-pointer" onClick={() => router.push('/todolist')}>
           Todo List with Routing.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/Soal.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Document
          </a>
        </div>
      </main>
    </div>
  );
}
