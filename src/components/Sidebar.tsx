import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const location = useLocation();

  return (
    <aside className="w-64 h-full bg-white border-r border-border flex flex-col">
      
      {/* Header Container */}
      <div className="md:hidden h-14 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">My App</h2>
        
        {/* Close Button - Added md:hidden directly here to force it to hide on desktop */}
        <button 
          onClick={onClose} 
          className="md:hidden text-slate-500 hover:text-slate-900 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose} 
              className={cn(
                buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "sm" }),
                "w-full justify-start gap-3"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
    </aside>
  );
}