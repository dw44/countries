// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { jsx } from '@emotion/react'

import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { dark } = useContext(ThemeContext);
  return (
    <header css={{
      boxShadow: '0 2px 2px 1px #ccc',
      height: '4em'
    }}>

    </header>
  );
}