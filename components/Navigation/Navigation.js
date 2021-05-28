// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { css } from '@emotion/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../../context/ThemeContext';
import RegionFilter from './RegionFilter';

export default function Navigation({ searchQuery, changeHandler, regionFilter, setRegionFilter }) {
  const { dark } = useContext(ThemeContext);

  const styles = css`
    width: 100%;
    max-width: 1440px;
    min-width: 375px;
    margin: 0 auto;
    padding: 0.75em;
    background-color: ${dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
    @media only screen and (min-width: 892px) {
      display: flex;
      justify-content: space-between;
      padding: 0.75em 0.5em;
    }
    div {
      width: 100%;
      max-width: 500px;
      height: 3.25em;
      border-radius: 0.333em;
      padding: 0 0 0 1em;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: ${dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
      color: ${dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
      input {
        flex: 2;
        padding: 0.5em 1em;
        font-size: 1em;
        border: none;
        background-color: inherit;
        color: inherit;
        font: inherit;
        font-weight: 600;
        font-size: 1em;
        &:focus {
          outline: none;
        }
      }
      svg {
        font-size: 1em;
      }
    }
  `;

  const regionChangeHandler = region => {
    if (region === regionFilter) {
      setRegionFilter('');
    } else {
      setRegionFilter(region);
    }
  }

  return (
    <nav css={ styles }>
      <div>
        <FontAwesomeIcon css={{ 'height': '1em' }} icon={ faSearch } />
        <input
          type="text" 
          value={searchQuery}
          onChange={event => changeHandler(event, 'search')}
          placeholder="Search for a country..." 
        />
      </div>
      <RegionFilter 
        dark={dark} 
        changeHandler={regionChangeHandler} 
        selected={regionFilter}
      />
    </nav>
  );
}