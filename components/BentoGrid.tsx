"use client";

import { motion, Variants } from "framer-motion";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";

// Container animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Item animation
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({
  courses,
}: BentoGridProps) {
  return (
    <main className="flex min-h-screen w-full bg-black pb-16 md:pb-0">

      <Sidebar />

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="
          flex-1
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
          p-4
          md:p-6
        "
      >
      
        <motion.section
          variants={item}
          className="col-span-full"
        >
          <HeroTile />
        </motion.section>

        {courses.length > 0 ? (
          courses.map((course) => (
            <motion.article
              key={course.id}
              variants={item}
              className="col-span-1"
            >
              <CourseCard course={course} />
            </motion.article>
          ))
        ) : (
          <motion.div
            variants={item}
            className="
              col-span-full
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-6
              text-center
              text-zinc-500
            "
          >
            No active courses found.
          </motion.div>
        )}

        <motion.section
          variants={item}
          className="col-span-full"
        >
          <ActivityTile />
        </motion.section>
      </motion.section>

      <MobileNav />
    </main>
  );
}