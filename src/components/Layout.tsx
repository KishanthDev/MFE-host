import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* 1. Dark Overlay (Mobile Only) - Closes sidebar when clicked */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 2. Sidebar Wrapper */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Pass down a function to close the sidebar when a link is clicked */}
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* 3. Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden w-full">

        {/* Header */}
        <header className="flex h-14 shrink-0 items-center border-b bg-white px-4 md:hidden">
          
          {/* Menu Button - Added md:hidden directly to the button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="md:hidden ml-4 text-lg font-semibold tracking-tight text-gray-900">My App</span>
          
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>

    </div>
  );
}