"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
  
  const Icon = (Icons[course.icon_name as keyof typeof Icons] ||
    Icons.Book) as LucideIcon;

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-zinc-900 p-4 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br 
        from-purple-500/10 via-transparent to-blue-500/10 blur-xl" />

      <div className="relative z-10">
        <Icon size={24} />
        <h2 className="mt-2">{course.title}</h2>

        <div className="mt-4 bg-zinc-700 h-2 rounded">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            className="bg-white h-2 rounded"
          />
        </div>
      </div>
    </motion.article>
  );
}