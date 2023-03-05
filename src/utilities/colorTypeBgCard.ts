export const colorTypeBgCard = (colorsTypesPokemon: object, type: string) => {
  type PokemonType = keyof typeof colorsTypesPokemon;
  const colorFondo = colorsTypesPokemon[type as PokemonType];
  return colorFondo;
};
