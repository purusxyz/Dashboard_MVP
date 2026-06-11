export default function HeroTile() {
  return (
    <section className="relative bg-zinc-900 p-6 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br 
        from-purple-500/10 via-transparent to-blue-500/10 blur-2xl" />

      <div className="relative z-10">
        <h1 className="text-2xl font-semibold">
          Welcome back, Purus
        </h1>
        <p className="text-zinc-400 mt-2"> 5 day streak</p>
      </div>
    </section>
  );
}