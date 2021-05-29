// for emotion
/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';

export default function RegionFilter({ changeHandler, selected, dark }) {
  const [isOpen, setIsOpen] = useState(false);

  const regions = [
    'Asia',
    'Africa',
    'Americas',
    'Europe',
    'Oceania',
    'Polar',
  ];

  const styles = {
    // for the details element containing the dropdown list of regions
    details: css`
      position: relative;
      width: 270px;
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      border-radius: 6px;
      margin: 10px 0;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      @media (min-width: 892px) {
        margin: 0;
      }
      &[open] {
        z-index: 1;
      }
      summary {
        padding: 1em;
        cursor: pointer;
        border-radius: 5px;
        background-color: inherit;
        list-style: none;
        font-weight: 600;
        &::-webkit-details-marker {
          display: none;
        }
        &:after {
          content: '';
          display: inline-block;
          float: right;
          width: .5em;
          height: .5em;
          border-bottom: 1px solid currentColor;
          border-left: 1px solid currentColor;
          border-bottom-left-radius: 2px;
          transform: rotate(45deg) translate(50%, 0%);
          transform-origin: center center;
          transition: transform ease-in-out 100ms
        }
        &:focus {
          outline: none;
        }
      }
      &[open] summary::after {
        transform: rotate(-45deg) translate(0%, 0%);
      }
      ul {
        width: 100%;
        background: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
        position: absolute;
        top: calc(100% + .5rem);
        left: 0;
        padding: 1em;
        margin: 0;
        box-sizing: border-box;
        border-radius: 6px;
      }
    `,
    // for each button +
    buttons: css`
      background-color: inherit;
      color: inherit;
      border: none;
      width: 100%;
      padding: 0.5em;
      text-align: left;
      font-size: 1em;
      cursor: pointer;
      font-weight: 600;
    `
  }

  // to automatically close menu when an option is selected
  const onToggle = event => {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <details open={isOpen} onClick={onToggle} css={styles.details}>
      <summary>{selected === '' ? 'Filter By Region' : `Filter By Region (${selected})`}</summary>
      <ul>
        {regions.map(region => 
          <li key={region}>
            <button 
              type="button" 
              onClick={() => changeHandler(region)}
              css={styles.buttons}
            >
              {region}
            </button>
          </li>
        )}
      </ul>
    </details>
  );

}