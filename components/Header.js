// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <header css={{
      padding: '0 4em',
      boxShadow: '0 2px 2px 1px #ccc',
      height: '4em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: "'Raleway', sans-serif",
    }}>
      <h1 css={{
        fontWeight: 700,
        fontSize: '1.3em',
      }}>
        Where in the world?
      </h1>
      <button 
      type="button"
      onClick={ toggleTheme }
      css={{
        'width': '10em',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'space-evenly',
        'cursor': 'pointer'
      }}>
        <FontAwesomeIcon css={{height: '1.8em', color: '#f0f'}} icon={dark ? faSun : faMoon} />
        {dark ? 'Day Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}