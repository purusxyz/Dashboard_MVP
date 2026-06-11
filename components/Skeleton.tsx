export default function Skeleton() {
  return (
    <section className="grid grid-cols-4 gap-4 p-6 animate-pulse">
      <div className="col-span-2 h-40 bg-zinc-800 rounded-xl" />
      <div className="h-40 bg-zinc-800 rounded-xl" />
      <div className="h-40 bg-zinc-800 rounded-xl" />
      <div className="col-span-2 h-40 bg-zinc-800 rounded-xl" />
    </section>
  );
}