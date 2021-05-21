import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/layout';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        if (response.data) {
          setCountries([...response.data]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }    
    }

    fetchCountries();
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          <Head>
            <title>Countries</title>
            <meta name="description" content="Statistics for the world's countries" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
