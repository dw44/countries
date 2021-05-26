// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

import Header from './Header';

export default function Layout({ children }) {
  const styles = css`
    width: 100vw;
    height: 100vh;
    border: 10px solid #000;
  `;
  return (
    <div css={styles}>
      <Header />
      { children }
    </div>
  );
}