"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex w-[95%] items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

        <h1 className="text-xl font-bold gradient-text">
          MockMate
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <a href="/">Home</a>
          <a href="/upload">Analyze</a>
          <a href="/interview">Interview</a>
        </div>

      </div>
    </nav>
  );
}