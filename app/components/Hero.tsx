export default function Hero({ hero }) {
  return (
    <div className="flex">
      <div className="hero-card">
        <div className="border-2j6n+69 flex-col space-y-1 p-2">
          <p className="font-semibold">{hero.name}</p>

          <div className="flex justify-between w-full py-1 space-x-2 bg-green-200 border-2 border-blue-800">
            <span className="p-1 bg-blue-200 rounded-lg">Balanced</span>
            <span className="p-1 bg-blue-200 rounded-lg">Elves</span>
            <span className="p-1 bg-blue-200 rounded-lg">Ranged</span>
          </div>
        </div>
        <p>Swiftness</p>
      </div>
    </div>
  );
}
