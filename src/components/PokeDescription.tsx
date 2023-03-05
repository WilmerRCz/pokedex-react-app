import { Stats } from "../interface/Pokemon";
import { usePokeStore } from "../store/pokemon";
import PokeBar from "./PokeBar";

function PokeDescription() {
  const stats = usePokeStore((state) => state.stats);

  return (
    <div className="w-full h-3/6 p-1 text-black rounded mt-1">
      <ul className="font-bold">
        {stats.map((pokemon: Stats, index: number) => (
          <div key={index}>
            <li className="text-sm" >
              {`${pokemon.stat.name}: ${pokemon.base_stat}`}
              <PokeBar base_stat={pokemon.base_stat}/>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PokeDescription;
