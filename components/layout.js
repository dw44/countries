import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { dark } = useContext(ThemeContext)
  return <div>{children}</div>
}