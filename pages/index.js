// for emotion
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import Head from 'next/head';
import { css } from '@emotion/react';
import { useState, useContext } from 'react';

import { ThemeProvider, ThemeContext } from '../context/ThemeContext';111
import Layout from '../components/Layout';
import Navigation from '../components/Navigation/Navigation';
import Countries from '../components/Countries';

export default function Home({ countries }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const changeHandler = (event, value) => {

    // refactor to handle changes to both search query and region filter from same event handler
    if (value === 'search') {
      // refactored to convert all queries to lowercase
      setSearchQuery(event.target.value);
    }
    if (value === 'region') {
      setRegionFilter(event.target.value);
    }
  } 

  const style = css`
    width: 100vw;
    min-width: 375px;
  `;

  return (
    <ThemeProvider>
      <div css={style} className="App">
        <Layout>
          <Head>
            <title>Countries</title>
            <meta name="description" content="Statistics for the world's countries" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navigation 
            searchQuery={searchQuery}
            regionFilter={regionFilter}
            setRegionFilter={setRegionFilter}
            changeHandler={changeHandler}
          />
          <Countries
            searchQuery={searchQuery}
            regionFilter={regionFilter}
            countries={countries}
          />
        </Layout>
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