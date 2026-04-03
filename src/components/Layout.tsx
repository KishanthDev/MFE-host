import Sidebar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}