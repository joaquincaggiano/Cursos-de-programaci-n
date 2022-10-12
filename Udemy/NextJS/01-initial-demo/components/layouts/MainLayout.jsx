// Css
import styles from "./MainLayout.module.css"

// Component next
import Head from "next/head";

// Components
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>My App - Joaquin</title>
            <meta name="description" content="Home App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      );
}
