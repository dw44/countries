// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../../context/ThemeContext';
import Flag from './Flag';

export default function Country({ country }) {
  console.log({...country});
  const { dark } = useContext(ThemeContext);
  const router = useRouter();

  const styles = {
    section: css`
      width: 100%;
      max-width: 1440px;
      min-width: 375px;
      margin: 0 auto;
      padding: 1em 0.5em;
      border: 1px solid #000;
    `,
    backButton: css`
      width: 7em;
      padding: 0.333em;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border: none;
      font-family: inherit;
      font-weight: 600;
      font-size: 0.875;
      border-radius: 4px;
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      cursor: pointer;
      svg {
        font-size: 1.5em;
      }
    `,
    contentContainer: css`
      width: 100%;
      margin: 2em 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
    `,
  }

  return (
    <section css={styles.section}>
      <button css={styles.backButton} onClick={router.back}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
        Back
      </button>
      <div style={styles.contentContainer}>
        <Flag flag={country.flag} name={country.name} />
      </div>
      <div css={{
        'height': '100%',
        'width': '100%',
      }}></div>
    </section>
  );
}