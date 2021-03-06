// for emotion
/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../../context/ThemeContext';
import Flag from './Flag';
import CountryData from './CountryData';

export default function Country({ country, codes }) {
  const { dark } = useContext(ThemeContext);
  const router = useRouter();

  const styles = {
    section: css`
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding: 1em 0.5em;
    `,
    backButton: css`
      width: 6em;
      padding: 0 0.333em;
      display: flex;
      margin-left: 1em;
      align-items: center;
      justify-content: space-evenly;
      border: none;
      font-family: inherit;
      font-weight: 600;
      font-size: 1em;
      border-radius: 4px;
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      cursor: pointer;
      svg {
        height: 2.5em;
      }
    `,
    container: css`
      width: 100%;
      margin-top: 2em;
      padding: 1em;
      display: block;
      @media only screen and (min-width: 992px) {
        display: grid;
        grid-gap: 2em;
        grid-template-columns: 50% 50%;
      }
    `,
    borderButtonContainer: css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1em;
      padding: 1em;
    `,
    borderButton: css`
      width: 7em;
      height: 3em;
      border: none;
      border-radius: 4px;
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      font: inherit;
      font-size: 0.875em;
      cursor: pointer;
    `,
    label: css`
    margin: 1em;
    text-align: center;
    border: none;
    background-color: transparent;

    color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    font-weight: 600;
    @media only screen and (max-width: 992px) {
      grid-column: span 3;
    }
    `,
  };

  return (
    <section css={styles.section}>
      <button type="button" css={styles.backButton} onClick={router.back}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
        Back
      </button>
      <div css={styles.container}>
        <Flag name={country.name} flag={country.flag} />
        <div>
          <CountryData country={country} />
          <div css={styles.borderButtonContainer}>
            {country.borders.length ? <p css={styles.label}>Border Countries: </p> : null}
            {country.borders.map((countryCode) => {
              // long names mess up button layout
              const { name } = codes.find((entry) => entry.alpha3Code === countryCode);
              return (
                <Link key={countryCode} href={`/${countryCode}`}>
                  <button type="button" css={styles.borderButton}>
                    {name.length <= 12 ? name : `${name.substring(0, 10)}...`}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
