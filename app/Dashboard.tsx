"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/config/supabase";
import BentoGrid from "@/components/BentoGrid";
import { Course } from "@/types/course";

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

      if (error) {
        console.error("Supabase Error:", error.message);
        setErrorMsg("Failed to load courses");
      } else {
        setCourses(data || []);
      }

      setLoading(false);
    };

    fetchCourses();
  }, []);

  // Loading state
  if (loading) {
    return <div className="p-10 text-gray-400">Loading courses...</div>;
  }

  // Error state
  if (errorMsg) {
    return <div className="p-10 text-red-400">{errorMsg}</div>;
  }

  // Empty state
  if (courses.length === 0) {
    return <div className="p-10 text-gray-400">No courses found</div>;
  }

  // Success state
  return <BentoGrid courses={courses} />;
}