import { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove credentials from local storage
    localStorage.removeItem("userCredentials");
    // 2. Redirect to the auth page
    navigate("/auth");
  };

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
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Pass down a function to close the sidebar when a link is clicked */}
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* 3. Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden w-full">

        {/* Header - Removed md:hidden so the header bar shows on desktop for the logout button */}
        <header className="flex h-14 shrink-0 items-center justify-between border-b bg-white px-4">

          {/* Left Side: Menu Toggle & Title */}
          <div className="flex items-center md:!hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            <span className="ml-4 text-lg font-semibold tracking-tight text-gray-900">
              My App
            </span>
          </div>

          {/* Right Side: Logout Button - Added ml-auto to ensure it stays on the right on desktop */}
          <button
            onClick={handleLogout}
            className="ml-auto text-gray-500 hover:text-red-600 focus:outline-none transition-colors"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>

        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>

    </div>
  );
}