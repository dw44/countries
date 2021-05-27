// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

import Header from './Header';

export default function Layout({ children }) {
  const styles = css`
    width: 100vw;
    min-width: 375px;
  `;
  return (
    <div css={styles}>
      <Header />
      { children }
    </div>
  );
}