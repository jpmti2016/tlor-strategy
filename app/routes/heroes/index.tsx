import Hero from "~/components/Hero";
import { heroes } from "./data-example";

export default function HeroesRoute() {
  return (
    <main className="p-6 bg-yellow-50">
      <h1 className="text-2xl font-bold text-green-900">Heroes</h1>

      {heroes.map((hero) => {
        return <Hero hero={hero} key={hero.name} />;
      })}

      {/* Reserved heroes */}
      <div className="flex justify-between p-2 mt-8 text-red-900 bg-red-400 border-2 border-red-600">
        <p className="text-lg font-semibold">Longbowman</p>
        <span className="p-1 bg-red-200 rounded-full">300</span>
      </div>

      {/* other */}
      <div className="faramir">
        <h2>Faramir (40) army composition</h2>
        <div>
          <h3>Unit 1</h3>
          <p>
            Sharpshooter <span>2750</span>
          </p>
          <p>
            Guard of the Tower <span>2750</span>
          </p>
        </div>
        <div>
          <h3>Unit 2</h3>
          <p>
            Dunedain <span>5500</span>
          </p>
        </div>
      </div>
    </main>
  );
}
