// React hooks
import { useEffect, useState } from "react";

// Components
import { Layout } from "../../components/Layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritesPokemons } from "../../components/ui";

// Utils
import { localFavorites } from "../../utils";

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
