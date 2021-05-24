// for emotion
/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navigation({ searchQuery, searchChangeHandler }) {
  const handleChange = event => {
    setSearchQuery(event.target.value);
  }

  return (
    <nav style={{margin: '10px'}}>
      <div>
        <FontAwesomeIcon css={{ 'height': '1em' }} icon={ faSearch } />
        <input
          style={{margin: '0 10px'}} 
          type="text" 
          value={searchQuery}
          onChange={searchChangeHandler}
          placeholder="Search for a country..." 
        />
      </div>
    </nav>
  );
}