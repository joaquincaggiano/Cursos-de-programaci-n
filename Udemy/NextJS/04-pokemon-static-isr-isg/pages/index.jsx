// Next UI
import { Grid } from "@nextui-org/react";

// API
import { pokeApi } from "../api";

// Components
import { Layout } from "../components/Layouts";
import { PokemonCard } from "../components/pokemon";

export default function Home({pokemons}) {

  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke) => {
          return <PokemonCard key={poke.id} id={poke.id} image={poke.img} name={poke.name}/>
        })}
      </Grid.Container>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");
  // console.log(data.results)
  const pokemons = await data.results.map((pokemon, i) => {
    return {...pokemon, id: i + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`}
  })
  // console.log("pokemons", pokemons)

  return {
    props: {
      pokemons
    }
  }
}
