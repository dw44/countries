import axios from 'axios';
import Head from 'next/head';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Boilerplate/Layout';
import CountryPage from '../components/CountryDetails/Country';

export default function Country({ country, countryCodes }) {
  return (
    <ThemeProvider>
      <Head>
        <title>{country.name}</title>
        <meta name={`Country Data for ${country.name}`} content={`Statistics for the ${country.name}`} />
      </Head>
      <Layout>
        <CountryPage codes={countryCodes} country={{ ...country }} />
      </Layout>
    </ThemeProvider>
  );
}

// fetch country data from api to prerender page at build time
export async function getStaticProps(context) {
  const countryCode = context.params.country;
  const country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
  // get all of them here to avoid multiple requests everytime a country page is loaded
  // to get paths for neighboring states
  const countryCodes = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');

  return {
    props: {
      country: country.data,
      countryCodes: countryCodes.data,
    },
  };
}

// define list of paths to be rendered at build time
export async function getStaticPaths() {
  const rawCountryData = await axios.get('https://restcountries.eu/rest/v2/all');
  const countries = rawCountryData.data;
  // each path fetches entries from api using their alpha3Code property
  const paths = countries.map((country) => ({
    params: { country: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
}
