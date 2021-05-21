import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { dark } = useContext(ThemeContext);
  
}