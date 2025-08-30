// app/welcome/welcome.tsx

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl">Welcome to ChatPat</h2>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <a href="/chat">Start a new conversation</a>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
