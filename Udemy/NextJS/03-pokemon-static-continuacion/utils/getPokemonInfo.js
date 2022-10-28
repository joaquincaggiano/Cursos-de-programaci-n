// API
import { pokeApi } from "../api";

export const getPokemonInfo = async (nameOrId) => {

  const { data } = await pokeApi.get(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}