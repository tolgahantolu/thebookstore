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
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
