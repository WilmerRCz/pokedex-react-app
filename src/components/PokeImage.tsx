import React from "react";
import { usePokeStore } from "../store/pokemon";

import { colorsTypesPokemonBgImage } from "../utilities/colorsTypesPokemonBgImage";
import { colorTypeBgImage } from "../utilities/colorTypeBgImage";

function PokeImage() {
  const image = usePokeStore((state) => state.image);
  const type = usePokeStore((state) => state.type);

  return (
    <div
      className="w-full h-2/5 rounded"
      style={{ backgroundColor: colorTypeBgImage(colorsTypesPokemonBgImage, type) }}
    >
      <img
        src={image}
        alt="image-pokemon"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default PokeImage;
