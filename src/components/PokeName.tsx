import { usePokeStore } from "../store/pokemon";

function PokeName() {
  const name = usePokeStore((state) => state.name);
  const hp = usePokeStore((state) => state.hp);
  return (
    <div className="flex justify-between text-black font-bold">
      <h1 className="">{name}</h1>
      <p>
        <span className="text-xs">hp:</span>{" "}
        <span className="text-md">{hp}</span>
      </p>
    </div>
  );
}

export default PokeName;
