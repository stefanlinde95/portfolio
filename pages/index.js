import Head from "next/head";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Portfolio } from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stefan Linde portfolio</title>
        <meta
          name="description"
          content="Full stack developer in Estonia. In addition, I am also an SEO expert. "
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
