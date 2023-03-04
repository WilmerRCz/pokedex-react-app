import { Stats } from "../interface/Pokemon";
import { usePokeStore } from "../store/pokemon";

function PokeDescription() {
  const stats = usePokeStore((state) => state.stats);

  return (
    <div className="w-full h-3/6 p-1 text-black bg-yellow-500 rounded">
      <ul className="">
        {stats.map((pokemon: Stats, index: number) => (
          <div key={index}>
            <li>{`${pokemon.stat.name}: ${pokemon.base_stat}`}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PokeDescription;
