import NextHead from 'next/head';

export default function Head({ children }) {
  return (
    <NextHead>
      <title>ItsNot</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  );
}
