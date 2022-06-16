import "styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  if (Component.getLayout) {
    // @ts-ignore
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
