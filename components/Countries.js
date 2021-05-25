import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import CountryCard from "./CountryCard";


export default function Countries({ countries, regionFilter, searchQuery }) {
  const { dark } = useContext(ThemeContext);

  // simplified for reusability
  const mapToCards = countriesToMap => (
    <section>
      {countriesToMap.map(country => <CountryCard 
        key={country.alpha3Code}
        flag={country.flag}
        name={country.name}
        capital={country.capital}
        population={country.population}
        region={country.region}
      />)}
    </section>
  );

  // no search query, no filter
  if (!searchQuery.trim().length && !regionFilter.length) {
    return mapToCards(countries);
  }

  // region filter applied, no search query
  if (!searchQuery.trim().length && regionFilter.length) {
    return mapToCards(
      countries.filter(country => country.region === regionFilter));
  }

  // search query but no region filter
  if (searchQuery.trim().length && !regionFilter.length) {
    return mapToCards(
      countries.filter(country => country.name.toLowerCase().includes(searchQuery))
    );
  }

  // search query and region filter
  if (searchQuery.trim() && regionFilter) {
    return mapToCards(
      countries
        .filter(country => country.region === regionFilter)
        .filter(country => country.name.toLowerCase().includes(searchQuery))
    );
  }
}
