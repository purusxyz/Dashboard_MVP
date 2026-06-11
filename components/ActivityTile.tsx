export default function ActivityTile() {
  const activityData = [
    1, 0, 1, 1, 0, 1, 0,
    0, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 0,
    0, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 0,
  ];

  return (
    <section className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5">
      <h2 className="text-sm font-medium text-zinc-300 mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {activityData.map((active, i) => (
          <div
            key={i}
            className={`
              h-4 w-4 rounded-md transition-all duration-300
              ${
                active
                  ? "bg-white hover:scale-110"
                  : "bg-zinc-700"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}