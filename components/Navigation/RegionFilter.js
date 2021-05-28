// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function RegionFilter({ changeHandler, dark }) {
  const regions = [
    'Asia',
    'Africa',
    'Americas',
    'Europe',
    'Oceania',
    'Polar',
  ];

  const styles = css`
    position: relative;
    width: 60%;
    min-width: 300px;

    border: 1px solid black;
    &[open] {
      z-index: 1;
    }
  `;

  return (
    <details css={styles}>
      <summary>Filter By Region</summary>
      <ul>
        {regions.map(region => 
          <li key={region}>
            <button type="button" onClick={() => changeHandler(region)}>{region}</button>
          </li>
        )}
      </ul>
    </details>
  );

}