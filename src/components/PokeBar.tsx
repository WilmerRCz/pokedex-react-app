import React from "react";
import { usePokeStore } from "../store/pokemon";
import { colorsTypesPokemon } from "../utilities/colorsTypesPokemon";
import { colorTypeBgImage } from "../utilities/colorTypeBgImage";

interface Props {
  base_stat: number;
}

function PokeBar({ base_stat }: Props) {
  const type = usePokeStore((state) => state.type);
  const porcentaje = (base_stat / 255) * 100;
  return (
    <div className="w-full bg-gray-200  rounded-full h-1.5">
      <div
        className="h-1.5 border rounded-full"
        style={{ width: `${porcentaje}%`, backgroundColor: colorTypeBgImage(colorsTypesPokemon, type) }}
      ></div>
    </div>
  );
}

export default PokeBar;
