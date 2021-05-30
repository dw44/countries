// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useContext } from 'react';

import { numberWithCommas } from '../../utils/utils';
import { ThemeContext } from '../../context/ThemeContext';

export default function CountryData({ country }) {
  const {dark} = useContext(ThemeContext);
  const styles = {
    container: css`
      width: 100%;
      margin-top: 2em;
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      h1 {
        margin-bottom: 0.777em;
      }
      div {
        margin: 1.25em 0;
      }
      & > div > p {
        margin-bottom: 0.333em;
        b {
          font-weight: 600;
        }
      }
    `,
    neighborButtons: css`
      
    `
  }
  
  return (
    <div css={styles.container}>
      <h1>{country.name}</h1>
      <div>
        <p><b>Native Name:{' '}</b>{country.nativeName}</p>
        <p><b>Population:{' '}</b>{numberWithCommas(country.population)}</p>
        <p><b>Region:{' '}</b>{country.region}</p>
        <p><b>Sub Region:{' '}</b>{country.subregion}</p>
        <p><b>Capital:{' '}</b>{country.capital}</p>
      </div>
      <div>
        <p><b>Top Level Domain:{' '}</b>{country.topLevelDomain}</p>
        <p><b>Currencies:{' '}</b>{country.currencies.map(currency => currency.name).join(', ')}</p>
        <p><b>Languages:{' '}</b>{country.languages.map(language => language.nativeName).join(', ')}</p>
      </div>
    </div>
  )
}