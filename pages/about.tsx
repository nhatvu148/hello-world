const About = () => {
  return <h1>About page</h1>;
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
