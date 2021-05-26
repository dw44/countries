import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
// import Navigation from '../components/Navigation';
// import Countries from '../components/Countries';
// import CountryCard from '../components/CountryCard';

export default function Home({ countries }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

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
      <div className="App">
        <Layout>
          <Head>
            <title>Countries</title>
            <meta name="description" content="Statistics for the world's countries" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Layout> 
        {/* <Countries
          searchQuery={searchQuery}
          regionFilter={regionFilter}
          countries={countries}
        /> */}
      </div>
    </ThemeProvider>
  );
}

// might as well...not like they change :p
export async function getStaticProps() {
  const countryData = await axios.get('https://restcountries.eu/rest/v2/all');
  return {
    props: {
      countries: [...countryData.data]
    }
  };
}