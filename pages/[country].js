import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import axios from 'axios';

export default function Country({ country }) {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <p>Country: {country.name}</p>
        <button type="button" onClick={() => router.back()}>Back</button>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const countryCode = context.params.country;
  const country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
  return {
    props: {
      country: country.data
    }
  };
}

export async function getStaticPaths() {
  const rawCountryData = await axios.get('https://restcountries.eu/rest/v2/all');
  const countries = rawCountryData.data;
  const paths = countries.map(country => ({
    params: { country: country.alpha3Code }
  }));

  return {
    paths,
    fallback: false,
  }
}