// Next
import Head from "next/head";

// Components
import { Navbar, SideMenu } from "../ui";

export const ShopLayout = ({ title, children, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      <SideMenu />

      <main
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};
