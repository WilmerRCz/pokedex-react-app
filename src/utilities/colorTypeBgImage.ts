export const colorTypeBgImage = (colorsTypesPokemonBgImage: object, type: string) => {
  type PokemonType = keyof typeof colorsTypesPokemonBgImage;
  const colorFondo = colorsTypesPokemonBgImage[type as PokemonType];
  return colorFondo
}