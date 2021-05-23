// for emotion
/** @jsxImportSource @emotion/react */

import Image from 'next/image';

export default function CountryCard({
  flag, name, population, region, capital
}) {
  return (
    <div 
      css={{
        'width': '270px',
        'height': '360px',
    }}>
      <div css={{
        width: '100%',
        height: '45%',
        objectFit: 'fill'
      }}>
        <img 
          src={flag} 
          loading="lazy"
          css={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '3% 3% 0 0'
          }}
        />
      </div>
      <div css={{
        height: '55%',
        borderRadius: '0 0 3% 3%',
        border: '1px solid #f30f22',
        borderTop: 'none'
      }}>

      </div>
    </div>
  );
}

