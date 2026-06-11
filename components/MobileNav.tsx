"use client";
import { Home, Book, Settings } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-zinc-900 flex justify-around p-3 md:hidden">
      <Home />
      <Book />
      <Settings />
    </nav>
  );
}