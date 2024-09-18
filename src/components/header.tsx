'use client'

export default function Header() {
  return (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            <p className="text-2xl font-semibold cursor-pointer" onClick={() =>window.location.href = '/'}>Home</p>
            </div>
          </div>
        </div>
      </div>

  )
}
