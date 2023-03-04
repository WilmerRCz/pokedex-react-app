import React from "react";
import { usePokeStore } from "../store/pokemon";

function PokeImage() {
  const image = usePokeStore((state) => state.image);
  return (
    <div className="w-full h-2/5 rounded  bg-red-400">
      <img
        src={image}
        alt="image-pokemon"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default PokeImage;
