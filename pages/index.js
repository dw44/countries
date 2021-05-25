import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';

export default function Home({ countries }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const changeHandler = (event, value) => {
    // refactor to handle changes to both search query and region filter from same event handler
    if (value === 'search') {
      setSearchQuery(event.target.value);
    }
    if (value === 'region') {
      setRegionFilter(event.target.value);
    }
  }

  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          <Head>
            <title>Countries</title>
            <meta name="description" content="Statistics for the world's countries" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navigation 
            changeHandler={changeHandler}
            searchQuery={searchQuery}
            regionFilter={regionFilter}
          />
          <Countries 
            searchQuery={searchQuery.toLowerCase()}
            regionFilter={regionFilter}
            countries={countries}
          />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

// might as well...not like they change :p
export async function getStaticProps(context) {
  const countryData = await axios.get('https://restcountries.eu/rest/v2/all');
  return {
    props: {
      countries: [...countryData.data]
    }
  };
}