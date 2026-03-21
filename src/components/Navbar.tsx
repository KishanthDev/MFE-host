import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, Settings } from "lucide-react";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-background border-r border-border flex flex-col">
      
      {/* Logo / Title */}
      <div className="h-14 flex items-center px-6 border-b border-border">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">My App</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                // Leverage shadcn's button variants for perfect hover/active states
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