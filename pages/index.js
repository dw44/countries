import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';

import { ThemeProvider } from '../context/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="App">
        <Head>
          <title>Countries</title>
          <meta name="description" content="Statistics for the world's countries" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </ThemeProvider>
  );
}
