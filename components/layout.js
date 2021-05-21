import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

import Header from './Header';

export default function Layout({ children }) {
  const { dark } = useContext(ThemeContext)
  return (
    <div>
      <Header />
      { children }
    </div>
  );
}