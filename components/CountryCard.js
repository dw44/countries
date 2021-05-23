// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';


export default function CountryCard({
  flag, name, population, region, capital
}) {
  
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
        'fontFamily': "'Nunito Sans', sans-serif",
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
            borderRadius: '3% 3% 0 0'
          }}
        />
      </div>
      <div css={{
        height: '55%',
        borderRadius: '0 0 3% 3%',
        border: '1px solid #f30f22',
        borderTop: 'none',
        padding: '10%'
      }}>
        <em css={{
          display: 'block',
          fontWeight: '700',
          fontSize: '1em'
        }}>{name}</em>
        <div css={countryDataStyles}>
          <span><b>Population:</b>{` ${name}`}</span>
          <span><b>Region:</b>{` ${region}`}</span>
          <span><b>Capital:</b>{` ${capital}`}</span>
        </div>
      </div>
    </section>
  );
}

