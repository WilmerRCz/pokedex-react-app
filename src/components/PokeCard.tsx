import { usePokeStore } from "../store/pokemon";
import { colorsTypesPokemon } from "../utilities/colorsTypesPokemon";
import { colorTypeBgCard } from "../utilities/colorTypeBgCard";
import PokeDescription from "./PokeDescription";
import PokeImage from "./PokeImage";
import PokeName from "./PokeName";

function PokeCard() {
  const type = usePokeStore((state) => state.type);
  return (
    <div
      className="w-72 h-1/2 px-2 rounded  border-8 border-yellow-500 "
      style={{ backgroundColor: colorTypeBgCard(colorsTypesPokemon, type) }}
    >
      <PokeName />
      <PokeImage />
      <PokeDescription />
    </div>
  );
}

export default PokeCard;
