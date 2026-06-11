import { Suspense } from "react";
import Dashboard from "./Dashboard";
import Skeleton from "@/components/Skeleton";

export default function Page() {
  return (
    <main>
      <Suspense fallback={<Skeleton />}>
        <Dashboard />
      </Suspense>
    </main>
  );
}