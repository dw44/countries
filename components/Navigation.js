// for emotion
/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navigation({ searchQuery, changeHandler, regionFilter }) {
  const regions = [
    'Asia',
    'Africa',
    'Americas',
    'Europe',
    'Oceania',
    'Polar',
  ]

  return (
    <nav style={{margin: '10px'}}>
      <div>
        <FontAwesomeIcon css={{ 'height': '1em' }} icon={ faSearch } />
        <input
          style={{margin: '0 10px'}} 
          type="text" 
          value={searchQuery}
          onChange={event => changeHandler(event, 'search')}
          placeholder="Search for a country..." 
        />
      </div>
      <select value={regionFilter} onChange={event => changeHandler(event, 'region')}>
        {regions.map(region => 
          <option value={region}>{region}</option>  
        )}
      </select>
    </nav>
  );
}