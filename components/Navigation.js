// for emotion
/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleChange = event => {
    setSearchQuery(event.target.value);
  }

  return (
    <nav>
      <div>
        <FontAwesomeIcon css={{ 'height': '1em' }} icon={ faSearch } />
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for a country..." 
        />
      </div>
    </nav>
  );
}