// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <div css={{
      margin: '0 auto',
      maxWidth: '1440px',
      minWidth: '375px',
    }}>
      <Header />
      { children }
    </div>
  );
}