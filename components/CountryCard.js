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

  const countryDataStyles = css`
    font-size: 14px;
    span {
      display: block;
      margin: 8px 0;
    }

    b {
      font-weight: 600;
    }
  `;
  
  return (
    <section 
      css={{
        'width': '270px',
        'height': '360px',
        'boxShadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        'backgroundColor': dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        'color': dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
        'fontFamily': "'Nunito Sans', sans-serif",
        'borderRadius': '6px 6px 6px 6px'
    }}>
      <div css={{
        width: '100%',
        height: '45%',
        objectFit: 'fill'
      }}>
        <img 
          src={flag} 
          loading="lazy"
          css={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '6px 6px 0 0'
          }}
        />
      </div>
      <div css={{
        height: '55%',
        borderRadius: '0 0 3% 3%',
        borderTop: 'none',
        padding: '10%'
      }}>
        <em css={{
          display: 'block',
          fontWeight: '800',
          fontSize: '20px',
          marginBottom: '30px'
        }}>{name}</em>
        <div css={countryDataStyles}>
          <span><b>Population:</b>{` ${numberWithCommas(population)}`}</span>
          <span><b>Region:</b>{` ${region}`}</span>
          <span><b>Capital:</b>{` ${capital}`}</span>
        </div>
      </div>
    </section>
  );
}

