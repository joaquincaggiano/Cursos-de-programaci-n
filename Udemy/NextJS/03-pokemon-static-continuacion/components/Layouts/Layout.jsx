import Head from "next/head";
import { Navbar } from "../ui";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Joaquín Caggiano" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: "0px 20px", 
      }}>
        {children}
      </main>
    </>
  );
};
