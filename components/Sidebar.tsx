"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = ["Dashboard", "Courses", "Settings"];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="hidden md:block w-64 bg-zinc-900 text-white p-4">
      {items.map((item) => (
        <div key={item} className="relative">
          {active === item && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 bg-zinc-700 rounded-md"
            />
          )}
          <button
            onClick={() => setActive(item)}
            className="relative z-10 p-2 cursor-pointer"
          >
            {item}
          </button>
        </div>
      ))}
    </nav>
  );
}