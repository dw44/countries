// for emotion
/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      { children }
    </div>
  );
}