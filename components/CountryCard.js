// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useContext } from 'react';

import { numberWithCommas } from '../utils/utils';
import { ThemeContext } from '../context/ThemeContext';

export default function CountryCard({
  flag, name, population, region, capital
}) {

  const { dark } = useContext(ThemeContext);

  const styles = {
    card: css`
      margin: 20px;
      width: 270px;
      height: 360px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      font-family: 'Nunito Sans', sans-serif;
      border-radius: 6px 6px;
      div { 
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px 6px 0 0;
        }
        h2 {
          display: block;
          font-weight: 800;
          font-size: 1.1em;
          margin-bottom: 30px;
        }
      }
    `,
    countryData: css`
      font-size: 0.875em;
      span {
        display: block;
        margin: 10px 0;
      }
      b {
        font-weight: 600;
      }
    `,
  }
  
  return (
    <section css={ styles.card }>
      <div css={{ height: '45%' }}>
        <img src={ flag } loading="lazy"/>
      </div>
      <div css={{
        height: '55%',
        padding: '10%'
      }}>
        <h2>{ name }</h2>
        <div css={ styles.countryData }>
          <span><b>Population:</b>{` ${numberWithCommas(population)}`}</span>
          <span><b>Region:</b>{` ${region}`}</span>
          <span><b>Capital:</b>{` ${capital ? capital : 'N/A'}`}</span>
        </div>
      </div>
    </section>
  );
}
