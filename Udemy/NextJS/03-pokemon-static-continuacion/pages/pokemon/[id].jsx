// React Hooks
import { useState } from "react";

// Next UI
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

// Components
import { Layout } from "../../components/Layouts";

// API
import { pokeApi } from "../../api";

// Utils
import { localFavorites } from "../../utils";

const PokemonPage = ({ pokemon }) => {
  // console.log(pokemon)

  const [isInFavorite, setIsInFavorite] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite)
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onPress={onToggleFavorite}
              >
                {isInFavorite ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  at={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  at={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  at={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  at={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => {
      return { params: { id } };
    }),

    fallback: false, //si la página no esta en el path da un 404
  };
};

export const getStaticProps = async (ctx) => {
  // console.log(ctx.params)
  const { id } = ctx.params;

  const { data } = await pokeApi.get(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
