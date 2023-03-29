import "@/styles/globals.css";
import { NextSeo } from "next-seo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextSeo
        title="Kokunime"
        description="Better kusonime.com website built using Next.js & TailwindCSS"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
