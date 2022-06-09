import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alina Anikina</title>
        <meta name="description" content="Alina Anikina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">HI</h1>
      </main>
    </>
  );
};

export default Home;
