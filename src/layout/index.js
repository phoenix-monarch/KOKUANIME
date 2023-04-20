import { Footer, Navbar } from "@/components";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Kokunime</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="min-h-full" id="particle-js">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
