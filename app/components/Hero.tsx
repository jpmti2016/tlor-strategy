export default function Hero({ hero }) {
  return (
    <div className="flex">
      <div className="hero-card">
        <div className="border-2j6n+69 flex-col space-y-1 p-2">
          <p className="text-xl font-semibold">{hero.name}</p>
          <div className="flex w-full py-1 space-x-2 bg-green-200 border-2 border-blue-800 justify-items-start">
            {hero.attributesToPushWithLoot.map((attribute) => (
              <span key={attribute} className="p-1 bg-orange-200 rounded-lg">
                {attribute}
              </span>
            ))}
          </div>

          <div className="flex justify-between w-full py-1 space-x-2 bg-green-200 border-2 border-blue-800">
            {hero.categories.map((cat) => (
              <span key={cat} className="p-1 bg-blue-200 rounded-lg">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
