// API
import { pokeApi } from "../api";

export const getPokemonInfo = async (nameOrId) => {
  try {
    const { data } = await pokeApi.get(`/pokemon/${nameOrId}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
