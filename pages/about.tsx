import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About"></meta>
      </Head>
      <h1>About page</h1>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <h3>Footer</h3>
    </>
  );
};
