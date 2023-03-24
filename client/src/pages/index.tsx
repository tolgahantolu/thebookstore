import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Bookstore</title>
        <meta
          name="description"
          content="The Bookstore e-commerce theme created by Tolgahan Tolu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <Navbar />
      <Header />
    </>
  );
}
