import { useRouter } from 'next/router';

import Layout from '../components/Boilerplate/Layout';
import axios from 'axios';

import { ThemeProvider } from '../context/ThemeContext';
import { numberWithCommas } from '../utils/utils';

export default function Country({ country }) {
  const router = useRouter();
  console.log(country);
  return (
    <ThemeProvider>   
      <Layout>
        <div>
          <p>Country: {country.name}</p>
          <button type="button" onClick={() => router.back()}>Back</button>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

// fetch country data from api to prerender page at build time
export async function getStaticProps(context) {
  const countryCode = context.params.country;
  const country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
  return {
    props: {
      country: country.data
    }
  };
}

// define list of paths to be rendered at build time
export async function getStaticPaths() {
  const rawCountryData = await axios.get('https://restcountries.eu/rest/v2/all');
  const countries = rawCountryData.data;
  // each path fetches entries from api using their alpha3Code property
  const paths = countries.map(country => ({
    params: { country: country.alpha3Code }
  }));

  return {
    paths,
    fallback: false,
  }
}