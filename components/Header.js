// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { css } from '@emotion/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../context/ThemeContext';

// responsive header
// display title, dark mode
export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  // TODO: remove styles from jsx
  const styles = css`
    width: 100%;
    min-width: 375px;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    position: sticky;
    top: 0;
    color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    box-shadow: 0 1px ${dark ? '#222' : '#ccc'};
    font-family: inherit;
    div {
      margin: 0 auto;
      padding: 0 0.75em;
      width: 100%;
      max-width: 1440px;
      min-width: 375px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 1.25em;
        font-weight: 800;
      }
      button {
        width: 8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        font-weight: 600;
        font-size: 0.875em;
        border: none;
        color: inherit;
      }  
    }
    `;

  return (
    <header css={ styles }>
      <div>
        <h1>
          Where in the world?
        </h1>
        <button type="button" onClick={ toggleTheme }>
          <FontAwesomeIcon css={{height: '1.5em'}} icon={dark ? faSun : faMoon} />
          {dark ? <span>Day Mode</span> : <span>Dark Mode</span>}
        </button>
      </div>
    </header>
  );
}