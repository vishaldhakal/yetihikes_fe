import Link from "next/link";
import { Home, Users, DollarSign, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/affiliates", label: "Affiliates", icon: Users },
  { href: "/advances", label: "Advances", icon: DollarSign },
  { href: "/settings", label: "Settings", icon: Settings },
];

export const metadata = {
  title: "Admin Dashboard - iCommission",
  description:
    "Admin dashboard for iCommission, the best commission advance company for realtors.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-xl pt-3">
        <div className="p-4">
          <h1 className="text-sm font-bold text-gray-800">iCommission Admin</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-4 text-gray-700 hover:bg-gray-100 text-sm py-4"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
