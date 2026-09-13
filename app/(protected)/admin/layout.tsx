import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-primary text-slate-900">
      <div className="flex items-center justify-center min-h-screen">
        {/* <aside className="w-64 border-r border-slate-200 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-center border-b border-slate-200 text-xl font-semibold tracking-wide">
            Admin
          </div>

          <nav className="space-y-2 p-4">
            <a href="/admin" className="block rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">
              Dashboard
            </a>
            <a href="/admin" className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100">
              Overview
            </a>
            <a href="/admin" className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100">
              Projects
            </a>
            <a href="/admin" className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100">
              Settings
            </a>
          </nav>
        </aside> */}

        {/* <main className="flex-1">
          <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white">
              Logout
            </button>
          </header>

        </main> */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
