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
      'padding': '0 4em',
      'boxShadow': '0 2px 2px 1px #ccc',
      'height': '4em',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'fontFamily': "'Raleway', sans-serif",
      'backgroundColor': dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
      'color': dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)', 
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
        'width': '9em',
        'border': 'none',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'space-evenly',
        'backgroundColor': 'transparent',
        'cursor': 'pointer',
        'fontFamily': "'Nunito Sans', sans-serif",
        'fontWeight': '600',
        'fontsize': '1.1em',
        'color': dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)', 
      }}>
        <FontAwesomeIcon css={{height: '1.5em'}} icon={dark ? faSun : faMoon} />
        {dark ? <span>Day Mode</span> : <span>Dark Mode</span>}
      </button>
    </header>
  );
}