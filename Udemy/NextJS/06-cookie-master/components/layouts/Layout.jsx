// Next
import Head from "next/head";

// Components
import { Navbar } from "../ui";

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
