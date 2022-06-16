import Head from "next/head";
import SectionNavbars from "pages-sections/components/SectionNavbars.js";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next Movies</title>
        <meta name="description" content="Next Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionNavbars />
      {children}
    </>
  );
}
