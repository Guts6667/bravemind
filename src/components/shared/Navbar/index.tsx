"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold">
          BraveMind
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/" className={`px-2 py-1 rounded transition-colors ${pathname === "/" ? "bg-blue-200" : ""}`}>
            Home
          </Link>
          <Link href="/entries/new" className={`px-2 py-1 rounded transition-colors ${pathname === "/entries/new" ? "bg-blue-200" : ""}`}>
            New entry
          </Link>
          <Link href="/timeline" className={`px-2 py-1 rounded transition-colors ${pathname === "/timeline" ? "bg-blue-200" : ""}`}>
            Timeline
          </Link>
        </nav>
      </div>
    </header>
  );
}
