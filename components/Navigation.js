// for emotion
/** @jsxImportSource @emotion/react */

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
    <nav style={{margin: '10px', width: '100%'}}>
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
        <option value="">All</option>
        {regions.map(region => 
          <option key={region} value={region}>{region}</option>  
        )}
      </select>
    </nav>
  );
}