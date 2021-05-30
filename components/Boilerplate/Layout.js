// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';

import Header from './Header';

export default function Layout({ children }) {
  const { dark } = useContext(ThemeContext);

  const styles = css`
    width: 100%;
    min-height: 100vh;
    background-color: ${dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  `;
  
  return (
    <div css={styles}>
      <Header />
      { children }
    </div>
  );
}