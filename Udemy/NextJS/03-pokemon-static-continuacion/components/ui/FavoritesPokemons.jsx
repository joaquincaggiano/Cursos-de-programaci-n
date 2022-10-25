// Next UI
import { Grid } from "@nextui-org/react";

// Components
import { FavoriteCardPokemon } from "../pokemon";

export const FavoritesPokemons = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((id) => {
        return <FavoriteCardPokemon pokemonId={id} key={id} />;
      })}
    </Grid.Container>
  );
};
