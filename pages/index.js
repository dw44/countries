import axios from 'axios';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import CountryCard from '../components/CountryCard';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
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

  const changeHandler = (event, value) => {
    // refactor to handle changes to both search query and region filter from same event handler
    if (value === 'search') {
      setSearchQuery(event.target.value);
    }
    if (value === 'region') {
      setRegionFilter(event.target.value);
    }
    console.log(value);
    console.log(regionFilter);
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
          {searchQuery.trim().length
            ? countries.filter(country => country.name.toLowerCase().includes(searchQuery.trim())).map(country => 
                <CountryCard 
                  key={country.alpha3Code}
                  flag={country.flag}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                />
              )
            : countries.map(country => 
                <CountryCard 
                  key={country.alpha3Code}
                  flag={country.flag}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                />
              )
          }
        </div>
      </Layout>
    </ThemeProvider>
  );
}
