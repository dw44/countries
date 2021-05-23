import axios from 'axios';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import CountryCard from '../components/CountryCard';

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
          <CountryCard
            flag="https://restcountries.eu/data/irq.svg"
            name="Germany"
            population="82,500,725"
            region="Europe"
            capital="Berlin"
          />
                    <CountryCard
            flag="https://restcountries.eu/data/irn.svg"
            name="Germany"
            population="82,500,725"
            region="Europe"
            capital="Berlin"
          />
                    <CountryCard
            flag="https://restcountries.eu/data/pak.svg"
            name="Germany"
            population="82,500,725"
            region="Europe"
            capital="Berlin"
          />
        </div>
      </Layout>
    </ThemeProvider>
  );
}
