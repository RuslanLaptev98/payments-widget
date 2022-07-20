import type { NextPage } from 'next';
import Head from 'next/head';
import PaymentsWidget from '../features/PaymentsWidget';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Payments Widget</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <PaymentsWidget />
    </>
  );
};

export default Home;
